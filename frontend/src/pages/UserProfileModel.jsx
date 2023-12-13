import Title from "../components/Title";
import HeaderLongUser from "../components/HeaderLongUser";
import Input from "../components/Input";
import ButtonMaxi from "../components/ButtonMaxi";

function UserProfileUser() {
  return (
    <div className="user-profile-page">
      <HeaderLongUser />
      <div>
        <Title titleText="Vos coordonnées" holderText="coucou" />
        <Input titleInput="Nom *" />
        <Input titleInput="Prénom *" />
        <Input titleInput="Email *" />
        <Input titleInput="Mot de passe *" />
        <Input titleInput="Téléphone *" />
        <Input titleInput="Addresse *" />
        <h3> Votre CV </h3>
        <div className="add-cv">
          <i className="fa-solid fa-plus" />
        </div>
        <ButtonMaxi />
      </div>
    </div>
  );
}

export default UserProfileUser;
