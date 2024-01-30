import "./header.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Unknow from "../../assets/no-profile.jpg";
import { useGlobalContext } from "../../contexts/GlobalContext";

function HeaderLongUser({ textTitle, textTitle2 }) {
  const [file, setFile] = useState();
  const { apiService, setUser, user } = useGlobalContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.info("Selected file:", file);

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const result = await apiService.post(
        "http://localhost:3310/api/uploads",
        formData
      );
      setUser(result);
    } catch (error) {
      console.error("Upload error:", error);
    }
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
          {user?.avatar?.url && (
            <img
              src={`http://localhost:3310/${user.avatar.url}`}
              alt="avatar"
              style={{ width: "100px", height: "100px" }}
            />
          )}
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
