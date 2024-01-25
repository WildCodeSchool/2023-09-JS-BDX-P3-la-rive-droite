import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
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

  const globalContext = useGlobalContext();
  const navigate = useNavigate();
  const [getSkills, setGetSkills] = useState([]);
  // const { skills, setSkills } = useSignContext();
  const [getProfile, setGetProfile] = useState({});
  // const [userCompetences, setUserCompetences] = useState({});
  const { user, apiService } = useGlobalContext();
  const [experiences, setExperiences] = useState([]);
  const [courses, setCourses] = useState([]);
  // const { experiences, courses } = useLoaderData();

  const handleExperienceDelete = async (id) => {
    // eslint-disable-next-line no-alert
    if (!window.confirm("Voulez-vous vraiment supprimer cette expérience ?")) {
      return;
    }
    try {
      await globalContext.apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/experience/${id}`
      );
      globalContext.setSuccesMsg(true);
      globalContext.setMsgContent("Votre expérience a bien été supprimée");
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 4000);
      navigate("/edit-profile");
    } catch (err) {
      console.error(err);
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Une erreur est survenue");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    }
  };

  const handleCourseDelete = async (id) => {
    // eslint-disable-next-line no-alert
    if (!window.confirm("Voulez-vous vraiment supprimer cette formation ?")) {
      return;
    }
    try {
      await globalContext.apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/course/${id}`
      );
      globalContext.setSuccesMsg(true);
      globalContext.setMsgContent("Votre formation a bien été supprimée");
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 4000);
      navigate("/edit-profile");
    } catch (err) {
      console.error(err);
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Une erreur est survenue");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    }
  };

  useEffect(() => {
    let cvId = null;

    const getUserProfile = async () => {
      try {
        const response = await globalContext.apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
        );
        setGetProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchExperiences = async () => {
      const experienceData = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/experiences/by-cv-id/${cvId}`
      );
      setExperiences(experienceData.data);
    };

    const fetchCourses = async () => {
      const courseData = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/courses/by-cv-id/${cvId}`
      );
      setCourses(courseData.data);
    };

    const fetchCvId = async () => {
      const cvData = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}/cvs`
      );

      cvId = cvData.data.id;

      fetchExperiences();
      fetchCourses();
    };
    getUserProfile();
    fetchCvId();
  }, []);

  const handleCheckboxChanged = async (fieldName) => {
    const updatedSkills = { ...getSkills, [fieldName]: !getSkills[fieldName] };
    setGetSkills(updatedSkills);

    try {
      await globalContext.apiService.post(
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
          handleChange={(event) =>
            globalContext.handleChange(getProfile, "lastname", event)
          }
        />
        <Input
          titleInput="Prénom *"
          holderText={getProfile.firstname}
          fieldName="firstname"
          valueInput={getProfile}
          handleChange={(event) =>
            globalContext.handleChange(getProfile, "firstname", event)
          }
        />
        <Input
          titleInput="Email *"
          holderText={getProfile.email}
          fieldName="email"
          valueInput={getProfile}
          handleChange={(event) =>
            globalContext.handleChange(getProfile, "email", event)
          }
        />
        <Input
          titleInput="Téléphone *"
          holderText={getProfile.phone}
          fieldName="phone"
          typeInput="tel"
          valueInput={getProfile}
          handleChange={(event) =>
            globalContext.handleChange(getProfile, "phone", event)
          }
        />
        <Input
          titleInput="Addresse *"
          holderText={getProfile.address}
          fieldName="address"
          inputType="text"
          valueInput={getProfile}
          handleChange={(event) =>
            globalContext.handleChange(getProfile, "address", event)
          }
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
          {globalContext.errorMsg && (
            <ErrorMsg message={globalContext.msgContent} />
          )}
          {globalContext.succesMsg && (
            <SuccesMsg message={globalContext.msgContent} />
          )}
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

// UserProfileModel.propTypes = {
//   experiences: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       company: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       city: PropTypes.string.isRequired,
//       date_begin: PropTypes.string.isRequired,
//       date_end: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ),
//   courses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       level: PropTypes.string.isRequired,
//       domaine: PropTypes.string.isRequired,
//       date_begin: PropTypes.string.isRequired,
//       date_end: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ),
// };

// UserProfileModel.defaultProps = {
//   experiences: [],
//   courses: [],
// };

export default UserProfileModel;
