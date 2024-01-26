import PropTypes from "prop-types";
import "./button-mini.css";

function ButtonMini({ textBtn, onClick }) {
  return (
    <div>
      <button className="submit-btn-mini" type="submit" onClick={onClick}>
        {textBtn}
      </button>
    </div>
  );
}
ButtonMini.propTypes = {
  textBtn: PropTypes.string,
  onClick: PropTypes.func,
};
ButtonMini.defaultProps = {
  textBtn: "Enregistrer",
  onClick: () => {},
};
export default ButtonMini;
