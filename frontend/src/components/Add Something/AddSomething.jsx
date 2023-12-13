import React from "react";
import PropTypes from "prop-types";
import "./add-something.css";
import "../../default-settings.css";

function AddDetailsCV({ addDetail }) {
  return (
    <div className="add-details-button">
      <p>{addDetail}</p>
      <i className="fa-solid fa-plus"> </i>
    </div>
  );
}
AddDetailsCV.propTypes = {
  addDetail: PropTypes.string.isRequired,
};

export default AddDetailsCV;
