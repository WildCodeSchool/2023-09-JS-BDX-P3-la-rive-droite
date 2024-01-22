import PropTypes from "prop-types";
import "./input.css";

function Input({
  titleInput,
  holderText,
  typeInput,
  fieldName,
  valueInput,
  handleChange,
}) {
  return (
    <div className="container-input">
      <label className="label-champs" htmlFor="name">
        {titleInput ?? "Nom de l'input"}
      </label>
      <input
        className="background-input"
        type={typeInput ?? "text"}
        id={fieldName}
        name={fieldName}
        placeholder={holderText ?? "Texte du placeholder"}
        value={valueInput[fieldName]}
        onChange={handleChange}
      />
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  valueInput: PropTypes.element.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
