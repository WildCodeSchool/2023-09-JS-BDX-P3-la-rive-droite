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
    </div>
  );
}

TextArea.propTypes = {
  titleInput: PropTypes.string,
  holderText: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  valueInput: PropTypes.oneOfType([PropTypes.object]),
  handleChange: PropTypes.func.isRequired,
};
TextArea.defaultProps = {
  titleInput: "Nom de l'input",
  holderText: "Texte du placeholder",
  valueInput: {},
};

export default TextArea;
