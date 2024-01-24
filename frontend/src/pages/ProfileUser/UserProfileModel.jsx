import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./user-profile-model.css";
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
// import { useSignContext } from "../../contexts/SignContext";

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
  // const { skills, setSkills } = useSignContext();
  const [getProfile, setGetProfile] = useState({});
  const { experiences, courses } = useLoaderData();
  // const [userCompetences, setUserCompetences] = useState({});

  const handleExperienceDelete = async (id) => {
    // eslint-disable-next-line no-alert
    if (!window.confirm("Voulez-vous vraiment supprimer cette expérience ?")) {
      return;
    }
    try {
      await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/experience/${id}`
      );
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
    // eslint-disable-next-line no-alert
    if (!window.confirm("Voulez-vous vraiment supprimer cette formation ?")) {
      return;
    }
    try {
      await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/course/${id}`
      );
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
          `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
        );
        setGetProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    // const getSkillsProfile = async () => {
    //   try {
    //     const response = await apiService.get(
    //       `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
    //     );
    //     setGetSkills(response.data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // getSkillsProfile();
    getUserProfile();
  }, []);

  const handleCheckboxChanged = async (fieldName) => {
    const updatedSkills = { ...getSkills, [fieldName]: !getSkills[fieldName] };
    setGetSkills(updatedSkills);

    try {
      await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/updateSkills`,
        updatedSkills
      );
    } catch (error) {
      console.error("Error updating skills:", error);
    }
  };
  return window.location.pathname === "/edit-profile" ||
    window.location.pathname === "/edit-profile" ? (
    <div id="user-profile-model">
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
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "html", event)
            }
          />

          <CompetenceSwitch
            textCompetence="CSS"
            valueInput={getProfile}
            fieldName="css"
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "css", event)
            }
          />
          <CompetenceSwitch
            textCompetence="JAVASCRIPT"
            fieldName="javascript"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "javascript", event)
            }
          />
          <CompetenceSwitch
            textCompetence="ANGULAR"
            fieldName="angular"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "angular", event)
            }
          />
          <CompetenceSwitch
            textCompetence="REACT.JS"
            fieldName="react"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "react", event)
            }
          />
          <CompetenceSwitch
            textCompetence="PHP"
            fieldName="php"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "php", event)
            }
          />
          <CompetenceSwitch
            textCompetence="SYMPHONY"
            fieldName="symphony"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "symphony", event)
            }
          />
          <CompetenceSwitch
            textCompetence="GIT"
            fieldName="git"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "git", event)
            }
          />
          <CompetenceSwitch
            textCompetence="GITHUB"
            fieldName="github"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "github", event)
            }
          />
          <CompetenceSwitch
            textCompetence="TRELLO"
            fieldName="trello"
            valueInput={getProfile}
            handleChange={(event) =>
              handleCheckboxChanged(getProfile, "trello", event)
            }
          />
        </div>
        <AddDetailsCV
          addDetail="Expériences professionnelles"
          url="/edit-profile/experience"
        />
        <div className="experience-container">
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
        </div>
        <AddDetailsCV addDetail="Formations" url="/edit-profile/formation" />
        <div className="formation-container">
          {courses &&
            courses.map((course) => (
              <CardFormation
                key={course.id}
                id={course.id}
                level={course.level}
                domaine={course.domaine}
                dateBegin={course.date_begin}
                dateEnd={course.date_end}
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
    </div>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default UserProfileModel;
