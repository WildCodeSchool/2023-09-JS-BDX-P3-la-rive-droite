import React from "react";
import PropTypes from "prop-types";
import "./competence-switch.css";
import "../../default-settings.css";

function CompetenceSwitch({ textCompetence, fieldName, handleChange }) {
  return (
    <div className="competence-line">
      <p className="label-champs">
        {textCompetence ?? "La valeur n'est pas définit."}
      </p>
      <label className="switch">
        _
        <input
          type="checkbox"
          id={fieldName}
          name={fieldName}
          value={fieldName}
          onChange={handleChange}
          data-competence="true"
        />
        <span className="slider round"> </span>
      </label>
    </div>
  );
}

CompetenceSwitch.propTypes = {
  textCompetence: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CompetenceSwitch;
