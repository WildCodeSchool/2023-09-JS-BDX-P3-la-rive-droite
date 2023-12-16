import PropTypes from "prop-types";
import { useLogContext } from "../../contexts/LogContext";
import "./checkbox-conditions.css";

function CheckboxCondition({ textCondition, fieldName }) {
  const { handleCheckboxChange } = useLogContext();

  const handleChange = () => {
    handleCheckboxChange(fieldName);
  };

  return (
    <div>
      <div className="container-checkbox">
        <input
          type="checkbox"
          id={fieldName}
          name={fieldName}
          value={fieldName}
          onChange={handleChange}
        />
        <label htmlFor="scales">
          {textCondition ?? "Aucune valeur définit"}
        </label>
      </div>
    </div>
  );
}

CheckboxCondition.propTypes = {
  textCondition: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default CheckboxCondition;
