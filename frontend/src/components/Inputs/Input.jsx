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
  titleInput: PropTypes.string,
  holderText: PropTypes.string,
  typeInput: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  valueInput: PropTypes.oneOfType([PropTypes.object]),
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  titleInput: "Nom de l'input",
  holderText: "Texte du placeholder",
  typeInput: "text",
  valueInput: {},
};

export default Input;
