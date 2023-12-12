import "../style/style_components/header-long-user.css";

function HeaderLongUser() {
  return (
    <div className="container-header">
      <div className="back">
        <i className="fa-solid fa-arrow-left" />
      </div>
      <div className="user">
        <i className="fa-solid fa-circle-user" />
      </div>
      <div className="menu">
        <i className="fa-solid fa-bars" />
      </div>
    </div>
  );
}
export default HeaderLongUser;
