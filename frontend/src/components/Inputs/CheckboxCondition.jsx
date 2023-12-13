import PropTypes from "prop-types";
import "./checkbox-conditions.css";

function CheckboxCondition({ textCondition }) {
  return (
    <div>
      <div className="container-checkbox">
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">
          {textCondition ?? "Aucune valeur définit"}
        </label>
      </div>
    </div>
  );
}

CheckboxCondition.propTypes = {
  textCondition: PropTypes.string.isRequired,
};

export default CheckboxCondition;
