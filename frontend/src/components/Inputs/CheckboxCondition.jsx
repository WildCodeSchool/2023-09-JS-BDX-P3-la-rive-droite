// import React, { useState } from "react";
import PropTypes from "prop-types";
import "./checkbox-conditions.css";
import { useLogContext } from "../../contexts/LogContext";

function CheckboxCondition({ textCondition }) {
  // const [isChecked, setIsChecked] = useState(false);
  const { isChecked, handleCheckboxChange } = useLogContext();

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div>
      <div className="container-checkbox">
        <input
          type="checkbox"
          id="scales"
          name="scales"
          value={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="scales">
          {textCondition ?? "Aucune valeur définit"}
        </label>
      </div>
    </div>
  );
}

CheckboxCondition.propTypes = {
  textCondition: PropTypes.string.isRequired,
};

export default CheckboxCondition;
