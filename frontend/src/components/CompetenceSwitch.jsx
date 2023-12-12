import React from "react";
import "../style/style_components/competence-switch.css";
import "../style/style_components/default-settings.css";

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
