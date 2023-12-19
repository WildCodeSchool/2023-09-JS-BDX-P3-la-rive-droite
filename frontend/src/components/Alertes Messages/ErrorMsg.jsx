import PropTypes from "prop-types";
import "./error-msg.css";

function ErrorMsg({ message }) {
  return (
    <div className="error-pop">
      <h3 className="error-description">
        <b className="error-text">Erreur : </b>
        {message}.
      </h3>
    </div>
  );
}

ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMsg;
