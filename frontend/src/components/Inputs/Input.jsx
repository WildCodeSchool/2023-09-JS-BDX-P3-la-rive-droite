import PropTypes from "prop-types";
import "./input.css";

function Input({ titleInput, holderText }) {
  return (
    <div className="container-input">
      <label className="label-champs" htmlFor="name">
        {titleInput ?? "Nom de l'input"}
      </label>
      <input
        className="background-input"
        type="text"
        id="name"
        placeholder={holderText ?? "Texte du placeholder"}
      />
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
};

export default Input;
