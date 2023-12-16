import React from "react";
import PropTypes from "prop-types";
import "./button-maxi.css";
import { useLogContext } from "../../contexts/LogContext";

function ButtonMaxi({ textBtn }) {
  const { handleSubmitSignIn } = useLogContext();

  return (
    <button
      className="submit-btn-maxi"
      type="button"
      onClick={handleSubmitSignIn}
    >
      {textBtn ?? "Test button maxi"}
    </button>
  );
}

ButtonMaxi.propTypes = {
  textBtn: PropTypes.string.isRequired,
};

export default ButtonMaxi;
