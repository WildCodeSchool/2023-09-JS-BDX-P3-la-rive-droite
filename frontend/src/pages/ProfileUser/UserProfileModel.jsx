import { useEffect, useState, Outlet } from "react";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Title from "../../components/Titles/Title";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import AddSomething from "../../components/Add Something/AddSomething";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useUserContext } from "../../contexts/UserContext";

function UserProfileModel() {
  const { apiService, handleChange } = useGlobalContext();
  const { handleSubmitProfile } = useUserContext();
  const [getProfile, setGetProfile] = useState([]);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await apiService.get(
          "http://localhost:3310/api/users/me"
        );
        setGetProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUserProfile();
  }, []);
  // const [getSkills, setGetSkills] = useState([]);
  // useEffect(() => {
  //   const getSkillsProfile = async () => {
  //     try {
  //       const response = await apiService.get(
  //         "http://localhost:3310/api/user/skill"
  //       );
  //       setGetSkills(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getSkillsProfile();
  // }, []);
  return (
    (
      <>
        <HeaderLongUser
          textTitle={getProfile.firstname}
          textTitle2={getProfile.lastname}
        />
        <div className="container-page">
          <Title titleText="Vos coordonnées" />
          <Input
            titleInput="Nom *"
            holderText={getProfile.lastname}
            fieldName="lastname"
            valueInput={getProfile}
            handleChange={(event) =>
              handleChange(setGetProfile, "lastname", event)
            }
          />
          <Input
            titleInput="Prénom *"
            holderText={getProfile.firstname}
            fieldName="firstname"
            valueInput={getProfile}
            handleChange={(event) =>
              handleChange(setGetProfile, "firstname", event)
            }
          />
          <Input
            titleInput="Email *"
            holderText={getProfile.email}
            fieldName="email"
            valueInput={getProfile}
            handleChange={(event) =>
              handleChange(setGetProfile, "email", event)
            }
          />
          <Input
            titleInput="Téléphone *"
            holderText={getProfile.phone}
            fieldName="phone"
            typeInput="tel"
            valueInput={getProfile}
            handleChange={(event) =>
              handleChange(setGetProfile, "phone", event)
            }
          />
          <Input
            titleInput="Addresse *"
            holderText={getProfile.address}
            fieldName="address"
            inputType="text"
            valueInput={getProfile}
            handleChange={(event) =>
              handleChange(setGetProfile, "address", event)
            }
          />
          <div className="container-switch">
            <h2 className="label-champs"> Cochez vos compétences *</h2>
            <CompetenceSwitch
              textCompetence="HTML"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "html", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="CSS"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "css", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="JAVASCRIPT"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "javascript", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="ANGULAR"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "angular", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="REACT.JS"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "react", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="PHP"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "php", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="SYMPHONY"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "symphony", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="GIT"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "git", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="GITHUB"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "github", event)
              // }
            />
            <CompetenceSwitch
              textCompetence="TRELLO"
              // handleChange={(event) =>
              //   handleCheckboxChange(setAddSkills, "trello", event)
              // }
            />
            <AddSomething addDetail="Votre CV" />
          </div>

          <ButtonMaxi textBtn="Enregistrer" clickFunc={handleSubmitProfile} />
        </div>
      </>
    ) || (
      <div>
        <Outlet />
      </div>
    )
  );
}

export default UserProfileModel;
