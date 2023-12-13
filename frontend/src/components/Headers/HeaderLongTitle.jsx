import "./header-long-title.css";
import PropTypes from "prop-types";

function HeaderLongTitle({ textTitle, textTitle2 }) {
  return (
    <div className="header">
      <div className="container-header">
        <div className="back">
          <i className="fa-solid fa-arrow-left" />
        </div>
        <div className="menu">
          <i className="fa-solid fa-bars" />
        </div>
        <div className="title">
          <h1 className="first-title">
            {textTitle ?? "La valeur n'est pas définie"}
          </h1>
          <h2 className="second-title">
            {textTitle2 ?? "La valeur n'est pas définie"}
          </h2>
        </div>
      </div>
    </div>
  );
}

HeaderLongTitle.propTypes = {
  textTitle: PropTypes.string.isRequired,
  textTitle2: PropTypes.string.isRequired,
};
export default HeaderLongTitle;
