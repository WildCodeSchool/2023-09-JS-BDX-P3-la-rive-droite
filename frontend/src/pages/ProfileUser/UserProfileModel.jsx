import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Title from "../../components/Titles/Title";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useUserContext } from "../../contexts/UserContext";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import CardFormation from "../../components/CardModel/CardFormation";
import CardExperience from "../../components/CardModel/CardExperience";
import AddDetailsCV from "../../components/Add Something/AddSomething";

function UserProfileModel() {
  const { handleAddCv } = useUserContext();
  const {
    errorMsg,
    succesMsg,
    msgContent,
    apiService,
    setSuccesMsg,
    setMsgContent,
    setErrorMsg,
    handleChange,
  } = useGlobalContext();
  const navigate = useNavigate();
  const [getSkills, setGetSkills] = useState([]);

  const [getProfile, setGetProfile] = useState({});
  const { experiences, courses } = useLoaderData();

  const handleExperienceDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette expérience ?")) {
      return;
    }
    try {
      await apiService.delete(`http://localhost:3310/api/experience/${id}`);
      setSuccesMsg(true);
      setMsgContent("Votre expérience a bien été supprimée");
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);
      navigate("/edit-profile");
    } catch (err) {
      console.error(err);
      setErrorMsg(true);
      setMsgContent("Une erreur est survenue");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }
  };

  const handleCourseDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette formation ?")) {
      return;
    }
    try {
      await apiService.delete(`http://localhost:3310/api/course/${id}`);
      setSuccesMsg(true);
      setMsgContent("Votre formation a bien été supprimée");
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);
      navigate("/edit-profile");
    } catch (err) {
      console.error(err);
      setErrorMsg(true);
      setMsgContent("Une erreur est survenue");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }
  };

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
          "http://localhost:3310/api/users/me"
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

  return window.location.pathname === "/edit-profile" ||
    window.location.pathname === "/edit-profile" ? (
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
          handleChange={(event) => handleChange(getProfile, "lastname", event)}
        />
        <Input
          titleInput="Prénom *"
          holderText={getProfile.firstname}
          fieldName="firstname"
          valueInput={getProfile}
          handleChange={(event) => handleChange(getProfile, "firstname", event)}
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
        </div>
        <AddDetailsCV
          addDetail="Expériences professionnelles"
          url="/edit-profile/experience"
        />

        {experiences &&
          experiences.map((experience) => (
            <CardExperience
              key={experience.id}
              id={experience.id}
              company={experience.company}
              title={experience.title}
              type={experience.type}
              city={experience.city}
              dateBegin={experience.date_begin}
              dateEnd={experience.date_end}
              description={experience.description}
              handleExperienceDelete={handleExperienceDelete}
            />
          ))}
        <AddDetailsCV addDetail="Formations" url="/edit-profile/formation" />
        <div className="formation-container">
          {courses &&
            courses.map((course) => (
              <CardFormation
                key={course.id}
                id={course.id}
                level={course.level}
                domaine={course.domaine}
                date_begin={course.date_begin}
                date_end={course.date_end}
                name={course.name}
                description={course.description}
                handleCourseDelete={handleCourseDelete}
              />
            ))}
        </div>
        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>
        <ButtonMaxi textBtn="Enregistrer" clickFunc={handleAddCv} />
      </div>
    </>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default UserProfileModel;
