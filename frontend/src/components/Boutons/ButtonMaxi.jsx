import React from "react";
import PropTypes from "prop-types";
import "./button-maxi.css";
import { useLogContext } from "../../contexts/LogContext";

function ButtonMaxi({ textBtn }) {
  const { handleSubmit } = useLogContext();

  return (
    <div>
      <button className="submit-btn-maxi" type="button" onClick={handleSubmit}>
        {textBtn ?? "Test button maxi"}
      </button>
    </div>
  );
}

ButtonMaxi.propTypes = {
  textBtn: PropTypes.string.isRequired,
};

export default ButtonMaxi;
