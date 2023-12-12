import "../style/style_components/header-long-title.css";

function HeaderLongTitle() {
  return (
    <div className="container-header">
      <div className="back">
        <i className="fa-solid fa-arrow-left" />
      </div>
      <div className="menu">
        <i className="fa-solid fa-bars" />
      </div>
      <div className="title">
        <h1>Bienvenue</h1>
        <h2>Nos offres</h2>
      </div>
    </div>
  );
}
export default HeaderLongTitle;
