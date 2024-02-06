import "./header.css";
import { useState } from "react";
import Unknow from "../../assets/no-profile.jpg";
import { useGlobalContext } from "../../contexts/GlobalContext";

function HeaderLongUser() {
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
        <div className="form-img">
          <form className="yooo" onSubmit={handleSubmit}>
            <label htmlFor="file" className="label-file">
              {" "}
              Choisir une image
            </label>
            <input
              id="file"
              className="input-img"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">Modifier</button>
          </form>
        </div>
        <h1>Modifier votre profil</h1>
      </div>
    </header>
  );
}

export default HeaderLongUser;
