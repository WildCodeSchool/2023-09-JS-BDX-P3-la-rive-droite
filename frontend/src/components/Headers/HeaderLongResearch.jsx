import "./header.css";
import PropTypes from "prop-types";
import InputSearch from "../Inputs/InputSearch";

function HeaderLongResearch({ textTitle, textTitle2 }) {
  return (
    <header className="  header with-round-bottom ">
      <div className=" container header-content">
        <h1>{textTitle}</h1>
        <h2>{textTitle2}</h2>
        <InputSearch holderText="Recherche..." />
      </div>
    </header>
  );
}

HeaderLongResearch.propTypes = {
  textTitle: PropTypes.string.isRequired,
  textTitle2: PropTypes.string.isRequired,
};

export default HeaderLongResearch;
