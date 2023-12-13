import "./header.css";
import PropTypes from "prop-types";
import Input from "../Inputs/Input";

function HeaderLongResearch({ textTitle, textTitle2 }) {
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
      <div className="input-research">
        <Input />
      </div>
    </header>
  );
}

HeaderLongResearch.propTypes = {
  textTitle: PropTypes.string.isRequired,
  textTitle2: PropTypes.string.isRequired,
};

export default HeaderLongResearch;
