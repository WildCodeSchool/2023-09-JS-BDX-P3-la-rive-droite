import Title from "../../components/Titles/Title";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";

function UserProfileUser() {
  return (
    <div className="user-profile-page">
      <HeaderLongUser />
      <div>
        <Title titleText="Vos coordonnées" />
        <Input titleInput="Nom *" holderText="Votre nom" />
        <Input titleInput="Prénom *" holderText="Votre prénom" />
        <Input titleInput="Email *" holderText="Email" />
        <Input titleInput="Mot de passe *" holderText="Mot de passe" />
        <Input titleInput="Téléphone *" holderText="Numéro de téléphone" />
        <Input titleInput="Addresse *" holderText="Adresse" />
        <ButtonMaxi />
      </div>
    </div>
  );
}

export default UserProfileUser;