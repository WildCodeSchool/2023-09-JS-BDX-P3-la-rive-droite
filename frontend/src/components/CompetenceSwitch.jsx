import React from "react";
import PropTypes from "prop-types";
import "../style/style_components/competence-switch.css";
import "../style/style_components/default-settings.css";

function CompetenceSwitch({ textBtn }) {
  return (
    <div className="competence-line">
      <p className="label-champs">{textBtn ?? "La valeur n'est pas définit"}</p>
      <label className="switch">
        _
        <input type="checkbox" />
        <span className="slider round"> </span>
      </label>
    </div>
  );
}

CompetenceSwitch.propTypes = {
  textBtn: PropTypes.string.isRequired,
};

export default CompetenceSwitch;
