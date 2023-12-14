import PropTypes from "prop-types";
import "./select.css";

function Select({ titleSelect, valueSelect }) {
  return (
    <div className="container-select">
      <label className="label-select" htmlFor="contrat-select">
        {titleSelect ?? "La valeur n'est pas renseigné."}
      </label>

      <select className="select-background" name="pets" id="pet-select">
        <option value="">---</option>
        <option value={valueSelect}>
          {valueSelect ?? "Aucune valeur n'est renseigner."}
        </option>
        <option value="CDD">CDD</option>
      </select>
    </div>
  );
}

Select.propTypes = {
  titleSelect: PropTypes.string.isRequired,
  valueSelect: PropTypes.string.isRequired,
};

export default Select;
