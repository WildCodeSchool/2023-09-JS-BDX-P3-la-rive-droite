import React from "react";
import PropTypes from "prop-types";
import "./add-something.css";
import "../../default-settings.css";
import { Link } from "react-router-dom";

function AddDetailsCV({ addDetail, url }) {
  return (
    <div className="add-details-button">
      <p>{addDetail}</p>
      <Link to={url} className="link-style">
        <i className="fa-solid fa-plus"> </i>
      </Link>
    </div>
  );
}
AddDetailsCV.propTypes = {
  addDetail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default AddDetailsCV;
