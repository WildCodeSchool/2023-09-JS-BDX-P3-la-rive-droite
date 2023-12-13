import React from "react";
import PropTypes from "prop-types";
import "../style/style_components/add-details-cv.css";
import "../style/style_components/default-settings.css";

function AddDetailsCV({ textBtn }) {
  return (
    <div className="add-details-button">
      <p>{textBtn ?? "La valeur n'est pas définit"}</p>
      <i className="fa-solid fa-plus"> </i>
    </div>
  );
}

AddDetailsCV.propTypes = {
  textBtn: PropTypes.string.isRequired,
};

export default AddDetailsCV;
