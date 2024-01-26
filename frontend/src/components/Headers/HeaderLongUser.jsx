import "./header.css";
import PropTypes from "prop-types";

function HeaderLongUser({ textTitle, textTitle2 }) {
  return (
    <header className="header with-round-bottom">
      <div className="header-content user">
        <div className="profile-img-container">
          <img src="/src/assets/no-profile.jpg" alt="" />
        </div>
        <button type="button">Modifier</button>
        <h1>
          {textTitle} {textTitle2}
        </h1>
      </div>
    </header>
  );
}

HeaderLongUser.propTypes = {
  textTitle: PropTypes.string,
  textTitle2: PropTypes.string,
};
HeaderLongUser.defaultProps = {
  textTitle: "Titre par défaut",
  textTitle2: "Titre 2 par défaut",
};
export default HeaderLongUser;
