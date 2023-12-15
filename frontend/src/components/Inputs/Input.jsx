import PropTypes from "prop-types";
import "./input.css";

function Input({ titleInput, holderText, hideInput }) {
  return (
    <div className="container-input">
      <label className="label-champs" htmlFor="name">
        {titleInput ?? "Nom de l'input"}
      </label>
      {!hideInput && (
        <input
          className="background-input"
          type="text"
          id="name"
          placeholder={holderText ?? "Texte du placeholder"}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  hideInput: PropTypes.bool.isRequired,
};

export default Input;
