import PropTypes from "prop-types";
import { useLogContext } from "../../contexts/LogContext";
import "./input.css";

function Input({ titleInput, holderText, typeInput, fieldName, hideInput }) {
  const { signIn, handleSignIn } = useLogContext();

  return (
    <div className="container-input">
      <label className="label-champs" htmlFor="name">
        {titleInput ?? "Nom de l'input"}
      </label>
      {!hideInput && (
        <input
          className="background-input"
          type={typeInput ?? "text"}
          id={fieldName}
          name={fieldName}
          placeholder={holderText ?? "Texte du placeholder"}
          value={signIn[fieldName]}
          onChange={(event) => handleSignIn(fieldName, event)}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  hideInput: PropTypes.bool.isRequired,
};

export default Input;
