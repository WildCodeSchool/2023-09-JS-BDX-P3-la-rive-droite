import React from "react";
import PropTypes from "prop-types";
import "./competence-switch.css";
import "../../default-settings.css";

function CompetenceSwitch({
  textCompetence,
  fieldName,
  handleChange,
  isChecked,
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
          checked={isChecked}
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
  isChecked: PropTypes.oneOfType([PropTypes.object]),
};

CompetenceSwitch.defaultProps = {
  textCompetence: "La valeur n'est pas définie.",
  isChecked: {},
};

export default CompetenceSwitch;
