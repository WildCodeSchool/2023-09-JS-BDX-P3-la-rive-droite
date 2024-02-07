import React from "react";
import PropTypes from "prop-types";
import "./add-something.css";
import "../../default-settings.css";
import { Link } from "react-router-dom";

function AddDetailsCV({ addDetail, url }) {
  return (
    <div className="add-details-button mt-5 mb-3">
      <h2 className="">{addDetail}</h2>
      <Link to={url}>
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
