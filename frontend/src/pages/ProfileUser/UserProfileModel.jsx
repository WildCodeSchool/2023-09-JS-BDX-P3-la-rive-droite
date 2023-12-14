import { Outlet } from "react-router-dom";
import Title from "../../components/Titles/Title";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import AddSomething from "../../components/Add Something/AddSomething";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";

function UserProfileUser() {
  return window.location.pathname === "/edit-profil" ? (
    <>
      <HeaderLongUser />
      <div className="container-page">
        <Title titleText="Vos coordonnées" />
        <Input titleInput="Nom *" holderText="Votre nom" showInput />
        <Input titleInput="Prénom *" holderText="Votre prénom" showInput />
        <Input titleInput="Email *" holderText="Email" showInput />
        <Input
          titleInput="Mot de passe *"
          holderText="Mot de passe"
          showInput
        />
        <Input
          titleInput="Téléphone *"
          holderText="Numéro de téléphone"
          showInput
        />
        <Input titleInput="Addresse *" holderText="Adresse" showInput />
        <Input titleInput="COMPÉTENCES *" showInput={false} />
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
