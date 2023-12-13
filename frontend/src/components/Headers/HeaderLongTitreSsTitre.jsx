import "./header.css";

function HeaderLongTitreSsTitre() {
  return (
    <header className="header with-round-bottom">
      <nav>
        <i className="fa-solid fa-arrow-left" />
        <i className="fa-solid fa-bars" />
      </nav>
      <div className="header-content title-and-sub-title">
        <h1>Candidatures</h1>
        <h2>Historique</h2>
      </div>
    </header>
  );
}

export default HeaderLongTitreSsTitre;
