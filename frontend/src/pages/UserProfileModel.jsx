import Title from "../components/Titles/Title";
import HeaderLongUser from "../components/Headers/HeaderLong";
import Input from "../components/Inputs/Input";
import ButtonMaxi from "../components/Boutons/ButtonMaxi";

function UserProfileUser() {
  return (
    <div className="user-profile-page">
      <HeaderLongUser />
      <div>
        <Title titleText="Vos coordonnées" />
        <Input titleInput="Nom *" holderText="ouehrfh" />
        <Input titleInput="Prénom *" />
        <Input titleInput="Email *" />
        <Input titleInput="Mot de passe *" />
        <Input titleInput="Téléphone *" />
        <Input titleInput="Addresse *" />
        <ButtonMaxi />
      </div>
    </div>
  );
}

export default UserProfileUser;
