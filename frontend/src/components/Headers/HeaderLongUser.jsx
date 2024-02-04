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
        `${import.meta.env.VITE_BACKEND_URL}/api/uploads/${user.id}`,
        formData
      );
      setUser({ ...user, upload_url: result.avatar.url });
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <header className="header with-round-bottom">
      <div className="header-content user">
        <div className="profile-img-container">
          <img
            src={
              user.upload_url
                ? `${import.meta.env.VITE_BACKEND_URL}/${user.upload_url}`
                : Unknow
            }
            alt=""
          />
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
