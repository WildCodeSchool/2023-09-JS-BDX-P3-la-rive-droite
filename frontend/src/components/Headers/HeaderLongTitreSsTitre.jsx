import "./header.css";
import PropTypes from "prop-types";

function HeaderLongTitreSsTitre({ title, subTitle }) {
  return (
    <header className="header with-round-bottom">
      <div className=" container header-content title-and-sub-title">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </header>
  );
}
HeaderLongTitreSsTitre.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default HeaderLongTitreSsTitre;
