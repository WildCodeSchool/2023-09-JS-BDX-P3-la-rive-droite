import { Outlet } from "react-router-dom";
import Title from "../../components/Titles/Title";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";

function UserProfileUser() {
  return window.location.pathname === "/edit-profil" ? (
    <>
      <HeaderLongUser />
      <div className="container-page">
        <Title titleText="Vos coordonnées" />
        <Input titleInput="Nom *" holderText="Votre nom" />
        <Input titleInput="Prénom *" holderText="Votre prénom" />
        <Input titleInput="Email *" holderText="Email" />
        <Input titleInput="Mot de passe *" holderText="Mot de passe" />
        <Input titleInput="Téléphone *" holderText="Numéro de téléphone" />
        <Input titleInput="Addresse *" holderText="Adresse" />
        <CompetenceSwitch />
        <ButtonMaxi />
      </div>
    </>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default UserProfileUser;
