import "./header.css";
import { useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import Unknow from "../../assets/no-profile.jpg";

function HeaderLongUser({ textTitle, textTitle2 }) {
  const [file, setFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.info(file);
    const formData = new FormData();
    formData.append("avatar", file);
    // const result = await axios.post("/uploads", formData);
  };
  return (
    <header className="header with-round-bottom">
      <div className="header-content user">
        <div className="profile-img-container">
          <img src={Unknow} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Modifier</button>
        </form>
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
