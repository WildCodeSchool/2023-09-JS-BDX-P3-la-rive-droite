import React from "react";
import PropTypes from "prop-types";
import "./competence-switch.css";
import "../../default-settings.css";

function CompetenceSwitch({
  textCompetence,
  fieldName,
  valueInput,
  handleChange,
}) {
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
          value={valueInput[fieldName]}
          onChange={handleChange}
        />
        <span className="slider round"> </span>
      </label>
    </div>
  );
}

CompetenceSwitch.propTypes = {
  textCompetence: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CompetenceSwitch;
