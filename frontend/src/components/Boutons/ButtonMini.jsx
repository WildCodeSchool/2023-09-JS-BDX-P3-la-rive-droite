import PropTypes from "prop-types";
import "./button-mini.css";

function ButtonMini({ textBtn }) {
  return (
    <div>
      <button className="submit-btn-mini" type="submit">
        {textBtn}
      </button>
    </div>
  );
}
ButtonMini.propTypes = {
  textBtn: PropTypes.string.isRequired,
};
export default ButtonMini;
