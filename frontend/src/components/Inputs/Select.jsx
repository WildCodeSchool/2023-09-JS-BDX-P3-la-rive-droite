import PropTypes from "prop-types";
import "./select.css";

function Select({ titleSelect, fieldName, children, handleChange }) {
  return (
    <div className="container-select">
      <label className="label-select" htmlFor="contrat-select">
        {titleSelect ?? "La valeur n'est pas renseignée."}
      </label>

      <select
        onChange={handleChange}
        className="select-background"
        name={fieldName}
        id="select-value"
      >
        <option value="">- - -</option>
        {children}
      </select>
    </div>
  );
}

Select.propTypes = {
  titleSelect: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
