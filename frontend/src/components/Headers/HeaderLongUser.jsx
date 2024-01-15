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
  textTitle: PropTypes.string.isRequired,
  textTitle2: PropTypes.string.isRequired,
};
export default HeaderLongUser;
