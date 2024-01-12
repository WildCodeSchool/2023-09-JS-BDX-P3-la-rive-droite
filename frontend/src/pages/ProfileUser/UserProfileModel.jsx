import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [getProfile, setGetProfile] = useState([]);
  useEffect(() => {
    const getProfileUser = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/users/me");

        if (response.ok) {
          const data = await response.json();

          setGetProfile(data);
        } else {
          console.error("Echec de la récupération des données.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getProfileUser();
  }, []);
  return (
    ((window.location.pathname === "/edit-profile" ||
      window.location.pathname === "/edit-profile/") && (
      <>
        <HeaderLongUser />
        {getProfile.map((profil, key) => (
          <div className="container-page">
            <Title titleText="Vos coordonnées" key={key.id} />
            <Input
              titleInput="Nom *"
              holderText={profil.lastname}
              fieldName="lastname"
              valueInput={editProfile}
            />
            <Input
              titleInput="Prénom *"
              holderText="Votre prénom"
              fieldName="firstname"
              valueInput={editProfile}
              handleChange={(event) =>
                handleChange(setEditProfile, "firstName", event)
              }
            />
            <Input
              titleInput="Email *"
              holderText="Email"
              fieldName="email"
              valueInput={editProfile}
              handleChange={(event) =>
                handleChange(setEditProfile, "email", event)
              }
            />
            <Input
              titleInput="Mot de passess *"
              holderText="Mot de passe"
              fieldName="password"
              typeInput="password"
              valueInput={editProfile}
              handleChange={(event) =>
                handleChange(setEditProfile, "password", event)
              }
            />
            <Input
              titleInput="Téléphone *"
              holderText="Numéro de téléphone"
              fieldName="phone"
              typeInput="tel"
              valueInput={editProfile}
              handleChange={(event) =>
                handleChange(setEditProfile, "phone", event)
              }
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
                handleChange={() =>
                  handleCheckboxChange(setAddSkills, "angular")
                }
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
                handleChange={() =>
                  handleCheckboxChange(setAddSkills, "symphony")
                }
              />
              <CompetenceSwitch
                textCompetence="GIT"
                handleChange={() => handleCheckboxChange(setAddSkills, "git")}
              />
              <CompetenceSwitch
                textCompetence="GITHUB"
                handleChange={() =>
                  handleCheckboxChange(setAddSkills, "github")
                }
              />
              <CompetenceSwitch
                textCompetence="TRELLO"
                handleChange={() =>
                  handleCheckboxChange(setAddSkills, "trello")
                }
              />
              <AddSomething addDetail="Votre CV" />
            </div>

            <ButtonMaxi textBtn="Enregistrer" clickFunc={handleSubmitProfile} />
          </div>
        ))}
      </>
    )) || (
      <div>
        <Outlet />
      </div>
    )
  );
}

export default UserProfileUser;
