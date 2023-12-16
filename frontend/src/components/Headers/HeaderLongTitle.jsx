import "./header.css";
import PropTypes from "prop-types";

function HeaderLongTitle({ textTitle }) {
  return (
    <header className="header">
      <nav>
        <i className="fa-solid fa-arrow-left" />
        <i className="fa-solid fa-bars" />
      </nav>
      <div className="header-content">
        <h1>{textTitle}</h1>
      </div>
    </header>
  );
}

HeaderLongTitle.propTypes = {
  textTitle: PropTypes.string.isRequired,
};

export default HeaderLongTitle;
