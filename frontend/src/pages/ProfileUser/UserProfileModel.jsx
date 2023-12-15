import { Outlet } from "react-router-dom";
import Title from "../../components/Titles/Title";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import AddSomething from "../../components/Add Something/AddSomething";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";

function UserProfileUser() {
  return window.location.pathname === "/edit-profile" ||
    window.location.pathname === "/edit-profile/" ? (
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
        <div className="container-switch">
          <h2 className="label-champs"> Cochez vos compétences *</h2>
          <CompetenceSwitch textCompetence="HTML" />
          <CompetenceSwitch textCompetence="CSS" />
          <CompetenceSwitch textCompetence="JAVASCRIPT" />
          <CompetenceSwitch textCompetence="ANGULAR" />
          <CompetenceSwitch textCompetence="REACT.JS" />
          <CompetenceSwitch textCompetence="PHP" />
          <CompetenceSwitch textCompetence="SYMPHONY" />
          <CompetenceSwitch textCompetence="GIT" />
          <CompetenceSwitch textCompetence="GITHUB" />
          <CompetenceSwitch textCompetence="TRELLO" />
          <AddSomething addDetail="Votre CV" />
        </div>

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
