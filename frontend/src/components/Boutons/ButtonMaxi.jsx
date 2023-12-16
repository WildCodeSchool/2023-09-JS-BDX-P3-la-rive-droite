import React from "react";
import PropTypes from "prop-types";
import { useLogContext } from "../../contexts/LogContext";
import "./button-maxi.css";

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
