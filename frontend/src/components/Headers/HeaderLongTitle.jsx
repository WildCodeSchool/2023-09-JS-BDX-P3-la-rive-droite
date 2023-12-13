import "./header.css";
import PropTypes from "prop-types";

function HeaderLongTitle({ textTitle, textTitle2 }) {
  return (
    <header className="header">
      <nav>
        <i className="fa-solid fa-arrow-left" />
        <i className="fa-solid fa-bars" />
      </nav>
      <div className="header-content">
        <h1>{textTitle}</h1>
        <h2>{textTitle2}</h2>
      </div>
    </header>
  );
}

HeaderLongTitle.propTypes = {
  textTitle: PropTypes.string.isRequired,
  textTitle2: PropTypes.string.isRequired,
};

export default HeaderLongTitle;
