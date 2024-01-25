import React from "react";
import PropTypes from "prop-types";
import "./competence-switch.css";
import "../../default-settings.css";

function CompetenceSwitch({
  textCompetence,
  fieldName,
  handleChange,
  valueInput,
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
          checked={valueInput[fieldName]}
          onChange={handleChange}
        />
        <span className="slider round"> </span>
      </label>
    </div>
  );
}

CompetenceSwitch.propTypes = {
  textCompetence: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  valueInput: PropTypes.oneOfType([PropTypes.object]),
};

CompetenceSwitch.defaultProps = {
  textCompetence: "La valeur n'est pas définie.",
  valueInput: {},
};

export default CompetenceSwitch;
