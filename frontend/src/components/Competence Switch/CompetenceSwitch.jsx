import React from "react";
import "./competence-switch.css";
import "../../default-settings.css";

function CompetenceSwitch() {
  return (
    <div className="competence-line">
      <p className="label-champs">JavaScript.</p>
      <label className="switch">
        _
        <input type="checkbox" />
        <span className="slider round"> </span>
      </label>
    </div>
  );
}

export default CompetenceSwitch;
