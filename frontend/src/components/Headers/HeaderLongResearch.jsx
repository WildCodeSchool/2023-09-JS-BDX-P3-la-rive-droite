import "./header.css";
import PropTypes from "prop-types";
import Input from "../Inputs/Input";

function HeaderLongResearch({ textTitle, textTitle2 }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{textTitle}</h1>
        <h2>{textTitle2}</h2>
      </div>
      <div className="input-research-container">
        <Input className="input-research" showInput />
      </div>
    </header>
  );
}

HeaderLongResearch.propTypes = {
  textTitle: PropTypes.string.isRequired,
  textTitle2: PropTypes.string.isRequired,
};

export default HeaderLongResearch;
