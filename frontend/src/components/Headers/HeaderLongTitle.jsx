import "./header.css";
import PropTypes from "prop-types";

function HeaderLongTitle({ textTitle }) {
  return (
    <header className="header">
      <div className=" container header-content">
        <h1>{textTitle}</h1>
      </div>
    </header>
  );
}

HeaderLongTitle.propTypes = {
  textTitle: PropTypes.string.isRequired,
};

export default HeaderLongTitle;
