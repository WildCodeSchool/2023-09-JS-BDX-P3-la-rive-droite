import React from "react";
import PropTypes from "prop-types";
import "./button-maxi.css";

function ButtonMaxi({ textBtn, clickFunc }) {
  return (
    <button className="submit-btn-maxi" type="button" onClick={clickFunc}>
      {textBtn ?? "Test button maxi"}
    </button>
  );
}

ButtonMaxi.propTypes = {
  textBtn: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};
// ButtonMaxi.defaultProps = {
//   textBtn: "Enregistrer",
//   clickFunc: () => {},
// };

export default ButtonMaxi;
