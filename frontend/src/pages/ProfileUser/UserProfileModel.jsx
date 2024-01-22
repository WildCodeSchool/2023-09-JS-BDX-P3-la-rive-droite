import { useEffect, useState, Outlet } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Title from "../../components/Titles/Title";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import AddSomething from "../../components/Add Something/AddSomething";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useUserContext } from "../../contexts/UserContext";
import AddDetailsCV from "../../components/Add Something/AddSomething";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import { useUserContext } from "../../contexts/UserContext";

function UserProfileModel() {
  const { apiService, handleChange } = useGlobalContext();
  const { handleSubmitProfile } = useUserContext();
  const [getProfile, setGetProfile] = useState([]);
  const [getSkills, setGetSkills] = useState([]);

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

    const getSkillsProfile = async () => {
      try {
        const response = await apiService.get(
          "http://localhost:3310/api/user/skill"
        );
        setGetSkills(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSkillsProfile();
    getUserProfile();
  }, []);

  const handleCheckboxChanged = async (fieldName) => {
    const updatedSkills = { ...getSkills, [fieldName]: !getSkills[fieldName] };
    setGetSkills(updatedSkills);

    try {
      await apiService.post(
        "http://localhost:3310/api/user/updateSkills",
        updatedSkills
      );
    } catch (error) {
      console.error("Error updating skills:", error);
    }
  };

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
              handleChange(getProfile, "lastname", event)
            }
          />
          <Input
            titleInput="Prénom *"
            holderText={getProfile.firstname}
            fieldName="firstname"
            valueInput={getProfile}
            handleChange={(event) =>
              handleChange(getProfile, "firstname", event)
            }
          />
          <Input
            titleInput="Email *"
            holderText={getProfile.email}
            fieldName="email"
            valueInput={getProfile}
            handleChange={(event) => handleChange(getProfile, "email", event)}
          />
          <Input
            titleInput="Téléphone *"
            holderText={getProfile.phone}
            fieldName="phone"
            typeInput="tel"
            valueInput={getProfile}
            handleChange={(event) => handleChange(getProfile, "phone", event)}
          />
          <Input
            titleInput="Addresse *"
            holderText={getProfile.address}
            fieldName="address"
            inputType="text"
            valueInput={getProfile}
            handleChange={(event) => handleChange(getProfile, "address", event)}
          />
          <div className="container-switch">
            <h2 className="label-champs"> Cochez vos compétences *</h2>
            <CompetenceSwitch
              textCompetence="HTML"
              fieldName="html"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "html", event)
              }
            />
            <CompetenceSwitch
              textCompetence="CSS"
              valueInput={getSkills}
              fieldName="css"
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "css", event)
              }
            />
            <CompetenceSwitch
              textCompetence="JAVASCRIPT"
              fieldName="javascript"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "javascript", event)
              }
            />
            <CompetenceSwitch
              textCompetence="ANGULAR"
              fieldName="angular"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "angular", event)
              }
            />
            <CompetenceSwitch
              textCompetence="REACT.JS"
              fieldName="react"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "react", event)
              }
            />
            <CompetenceSwitch
              textCompetence="PHP"
              fieldName="php"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "php", event)
              }
            />
            <CompetenceSwitch
              textCompetence="SYMPHONY"
              fieldName="symphony"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "symphony", event)
              }
            />
            <CompetenceSwitch
              textCompetence="GIT"
              fieldName="git"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "git", event)
              }
            />
            <CompetenceSwitch
              textCompetence="GITHUB"
              fieldName="github"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "github", event)
              }
            />
            <CompetenceSwitch
              textCompetence="TRELLO"
              fieldName="trello"
              valueInput={getSkills}
              handleChange={(event) =>
                handleCheckboxChanged(getSkills, "trello", event)
              }
            />
           <AddDetailsCV
          addDetail="Expériences professionnelles"
          url="/edit-profile/experience"
        />
        {experiences &&
          experiences.map((experience) => (
            <div className="card-container" key={experience.id}>
              <h3 className="diplome">{experience.title}</h3>
              <h4 className="dates">
                {experience.date_begin} - {experience.date_end ?? "en cours"}
              </h4>
              <p className="school">{experience.company}</p>
            </div>
          ))}
        <AddDetailsCV addDetail="Formations" url="/edit-profile/formation" />
        {courses &&
          courses.map((course) => (
            <div className="card-container" key={course.id}>
              <h3 className="level">
                {course.level} {course.domaine}
              </h3>
              <h4 className="dates">
                {course.date_begin} - {course.date_end}
              </h4>
              <p className="school">{course.name}</p>
            </div>
          ))}
        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>
        <ButtonMaxi textBtn="Enregistrer" clickFunc={handleAddCv} />
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
