import PropTypes from "prop-types";
import "./succes-msg.css";

function SuccesMsg({ message }) {
  return (
    <div className="succes-pop">
      <h3 className="succes-description">
        {message}
        <b className="succes-text"> Succès.</b>
      </h3>
    </div>
  );
}

SuccesMsg.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccesMsg;
