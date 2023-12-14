import React from "react";
import PropTypes from "prop-types";
import "./add-something.css";
import "../../default-settings.css";

function AddDetailsCV({ objectToAdd }) {
  return (
    <div className="add-details-button">
      <p>{objectToAdd ?? "Aucune valeur n'est définit"}</p>
      <i className="fa-solid fa-plus"> </i>
    </div>
  );
}

AddDetailsCV.propTypes = {
  objectToAdd: PropTypes.string.isRequired,
};

export default AddDetailsCV;
