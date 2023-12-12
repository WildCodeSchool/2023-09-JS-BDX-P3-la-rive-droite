import "../style/style_components/header-long-user.css";

function HeaderLongUser() {
  return (
    <div className="header">
      <div className="container-header">
        <div className="back">
          <i className="fa-solid fa-arrow-left" />
        </div>
        <div className="user">
          <i className="fa-solid fa-circle-user" />
        </div>
        <div>
          <button className="modify" type="button">
            Modifier
          </button>
        </div>
        <div>
          <h1 className="titre">Votre prénom et Nom</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderLongUser;
