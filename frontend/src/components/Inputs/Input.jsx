import PropTypes from "prop-types";
import { useLogContext } from "../../contexts/LogContext";
import "./input.css";

function Input({ titleInput, holderText, showInput, fieldName }) {
  const [signIn, handleSignIn] = useLogContext();

  return (
    <div className="container-input">
      <label className="label-champs" htmlFor="name">
        {titleInput ?? "Nom de l'input"}
      </label>
      {showInput && (
        <input
          className="background-input"
          type="text"
          id={fieldName}
          name={fieldName}
          placeholder={holderText ?? "Texte du placeholder"}
          value={signIn[fieldName]}
          onChange={handleSignIn}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  showInput: PropTypes.bool.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default Input;
