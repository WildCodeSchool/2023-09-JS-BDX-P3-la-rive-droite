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
import { useSignContext } from "../../contexts/SignContext";

function UserProfileUser() {
  const { handleChange, handleCheckboxChange } = useGlobalContext();
  const { handleSubmitProfile, setAddSkills } = useUserContext();
  const { signIn, setSignIn } = useSignContext();
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
          <div className="container-page" key={key.id}>
            <Title titleText="Vos coordonnées" />
            <Input
              titleInput="Nom *"
              holderText={profil.lastname}
              fieldName="lastname"
              valueInput={signIn}
              handleChange={(event) =>
                handleChange(setSignIn, "lastName", event)
              }
            />
            <Input
              titleInput="Prénom *"
              holderText={profil.firstname}
              fieldName="firstname"
              valueInput={signIn}
              handleChange={(event) =>
                handleChange(setSignIn, "firstName", event)
              }
            />
            <Input
              titleInput="Email *"
              holderText={profil.mail}
              fieldName="email"
              valueInput={signIn}
              handleChange={(event) => handleChange(setSignIn, "email", event)}
            />
            <Input
              titleInput="Téléphone *"
              holderText={profil.phone}
              fieldName="phone"
              typeInput="tel"
              valueInput={signIn}
              handleChange={(event) => handleChange(setSignIn, "phone", event)}
            />
            <Input
              titleInput="Addresse *"
              holderText={profil.address}
              fieldName="address"
              inputType="text"
              valueInput={signIn}
              handleChange={(event) =>
                handleChange(setSignIn, "address", event)
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
