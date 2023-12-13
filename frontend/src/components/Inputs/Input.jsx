import PropTypes from "prop-types";
import "./input.css";

function Input({ titleInput, holderText, inputType }) {
  return (
    <div className="container-input">
      <form>
        <div className="champs-form">
          <div>
            <label className="label-champs" htmlFor="name">
              {titleInput ?? "Nom de l'input"}
            </label>
          </div>
          <div>
            <input
              className="background-input"
              type={inputType}
              id="name"
              placeholder={holderText ?? "Texte du placeholder"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default Input;
