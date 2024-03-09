import PropTypes from "prop-types";
import "./checkbox-conditions.css";

function CheckboxCondition({
  textCondition,
  fieldName,
  handleChange,
  checked,
}) {
  return (
    <div>
      <div className="container-checkbox">
        <input
          type="checkbox"
          id={fieldName}
          name={fieldName}
          checked={!!checked}
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
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

CheckboxCondition.defaultProps = {
  checked: false,
};

export default CheckboxCondition;
