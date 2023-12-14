import PropTypes from "prop-types";
import "./text-area.css";

function TextArea({ titleInput, holderText }) {
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
            <textarea
              className="background-input"
              id="name"
              placeholder={holderText ?? "Texte du placeholder"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

TextArea.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
};

export default TextArea;
