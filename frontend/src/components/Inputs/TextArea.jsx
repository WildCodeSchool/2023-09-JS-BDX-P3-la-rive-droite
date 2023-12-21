import PropTypes from "prop-types";
import "./text-area.css";

function TextArea({
  titleInput,
  holderText,
  fieldName,
  valueInput,
  handleChange,
}) {
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
              type="text"
              id={fieldName}
              name={fieldName}
              placeholder={holderText ?? "Texte du placeholder"}
              value={valueInput[fieldName]}
              onChange={handleChange}
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
  fieldName: PropTypes.string.isRequired,
  valueInput: PropTypes.element.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
