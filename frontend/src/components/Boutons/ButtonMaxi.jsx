import React from "react";
import PropTypes from "prop-types";
import { useSignContext } from "../../contexts/SignContext";
import "./button-maxi.css";

function ButtonMaxi({ textBtn }) {
  const { handleSubmitSignIn } = useSignContext();

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
