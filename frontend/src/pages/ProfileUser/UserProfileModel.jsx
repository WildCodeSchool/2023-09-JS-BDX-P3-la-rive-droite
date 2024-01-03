import { Outlet } from "react-router-dom";
import Title from "../../components/Titles/Title";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import AddSomething from "../../components/Add Something/AddSomething";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useUserContext } from "../../contexts/UserContext";

function UserProfileUser() {
  const { handleChange, handleCheckboxChange } = useGlobalContext();
  const { editProfile, setEditProfile, handleSubmitProfile, setAddSkills } =
    useUserContext();

  return window.location.pathname === "/edit-profile" ||
    window.location.pathname === "/edit-profile/" ? (
    <>
      <HeaderLongUser />
      <div className="container-page">
        <Title titleText="Vos coordonnées" />
        <Input
          titleInput="Nom *"
          holderText="Votre nom"
          fieldName="lastname"
          inputType="text"
          valueInput={editProfile}
          handleChange={(event) =>
            handleChange(setEditProfile, "lastName", event)
          }
        />
        <Input
          titleInput="Prénom *"
          holderText="Votre prénom"
          fieldName="firstname"
          inputType="text"
          valueInput={editProfile}
          handleChange={(event) =>
            handleChange(setEditProfile, "firstName", event)
          }
        />
        <Input
          titleInput="Email *"
          holderText="Email"
          fieldName="email"
          inputType="text"
          valueInput={editProfile}
          handleChange={(event) => handleChange(setEditProfile, "email", event)}
        />
        <Input
          titleInput="Mot de passe *"
          holderText="Mot de passe"
          fieldName="password"
          inputType="text"
          valueInput={editProfile}
          handleChange={(event) =>
            handleChange(setEditProfile, "password", event)
          }
        />
        <Input
          titleInput="Téléphone *"
          holderText="Numéro de téléphone"
          fieldName="phone"
          inputType="text"
          valueInput={editProfile}
          handleChange={(event) => handleChange(setEditProfile, "phone", event)}
        />
        <Input
          titleInput="Addresse *"
          holderText="Adresse"
          fieldName="address"
          inputType="text"
          valueInput={editProfile}
          handleChange={(event) =>
            handleChange(setEditProfile, "address", event)
          }
        />
        <div className="container-switch">
          <h2 className="label-champs"> Cochez vos compétences *</h2>
          <CompetenceSwitch
            textCompetence="HTML"
            handleChange={() => handleCheckboxChange(setAddSkills, "html")}
          />
          <CompetenceSwitch
            textCompetence="CSS"
            handleChange={() => handleCheckboxChange(setAddSkills, "css")}
          />
          <CompetenceSwitch
            textCompetence="JAVASCRIPT"
            handleChange={() =>
              handleCheckboxChange(setAddSkills, "javascript")
            }
          />
          <CompetenceSwitch
            textCompetence="ANGULAR"
            handleChange={() => handleCheckboxChange(setAddSkills, "angular")}
          />
          <CompetenceSwitch
            textCompetence="REACT.JS"
            handleChange={() => handleCheckboxChange(setAddSkills, "react")}
          />
          <CompetenceSwitch
            textCompetence="PHP"
            handleChange={() => handleCheckboxChange(setAddSkills, "php")}
          />
          <CompetenceSwitch
            textCompetence="SYMPHONY"
            handleChange={() => handleCheckboxChange(setAddSkills, "symphony")}
          />
          <CompetenceSwitch
            textCompetence="GIT"
            handleChange={() => handleCheckboxChange(setAddSkills, "git")}
          />
          <CompetenceSwitch
            textCompetence="GITHUB"
            handleChange={() => handleCheckboxChange(setAddSkills, "github")}
          />
          <CompetenceSwitch
            textCompetence="TRELLO"
            handleChange={() => handleCheckboxChange(setAddSkills, "trello")}
          />
          <AddSomething addDetail="Votre CV" />
        </div>

        <ButtonMaxi textBtn="Enregistrer" clickFunc={handleSubmitProfile} />
      </div>
    </>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default UserProfileUser;
