import React from "react";
import PropTypes from "prop-types";
import "./competence-switch.css";
import "../../default-settings.css";

function CompetenceSwitch({ textCompetence }) {
  return (
    <div className="competence-line">
      <p className="label-champs">
        {textCompetence ?? "La valeur n'est pas définit."}
      </p>
      <label className="switch">
        _
        <input type="checkbox" />
        <span className="slider round"> </span>
      </label>
    </div>
  );
}

CompetenceSwitch.propTypes = {
  textCompetence: PropTypes.string.isRequired,
};

export default CompetenceSwitch;
