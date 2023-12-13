import PropTypes from "prop-types";
import "./button-maxi.css";

function ButtonMaxi({ textBtn }) {
  return (
    <div>
      <button className="submit-btn-maxi" type="submit">
        {textBtn ?? "Test button maxi"}
      </button>
    </div>
  );
}

ButtonMaxi.propTypes = {
  textBtn: PropTypes.string.isRequired,
};

export default ButtonMaxi;
