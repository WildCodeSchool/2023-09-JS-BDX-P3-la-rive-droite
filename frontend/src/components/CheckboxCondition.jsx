import PropTypes from "prop-types";

function CheckboxCondition({ textCondition }) {
  return (
    <div>
      <div className="container-checkbox">
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">
          {textCondition ?? "Case à cocher pour valider"}
        </label>
      </div>
    </div>
  );
}

CheckboxCondition.propTypes = {
  textCondition: PropTypes.string.isRequired,
};

export default CheckboxCondition;
