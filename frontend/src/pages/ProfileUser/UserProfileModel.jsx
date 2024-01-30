import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import "./user-profile-model.css";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
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
  // const { skills, setSkills } = useSignContext();
  const [getProfile, setGetProfile] = useState({});
  // const [userCompetences, setUserCompetences] = useState({});
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
      navigate("/profile");
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
      navigate("/profile");
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
      const experienceData = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/experiences/by-cv-id/${cvId}`
      );
      setExperiences(experienceData.data);
    };

    const fetchCourses = async () => {
      const courseData = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/courses/by-cv-id/${cvId}`
      );
      setCourses(courseData.data);
    };

    const fetchCvId = async () => {
      const cvData = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/1/cvs`
      ); // TODO FRED: remplacer le 1 par le vrai id du user

      cvId = cvData.data.id;

      fetchExperiences();
      fetchCourses();
    };
    getUserProfile();
    fetchCvId();
  }, []);

  return window.location.pathname === "/profile" ||
    window.location.pathname === "/profile" ? (
    <div id="user-profile-model">
      <HeaderLongUser
        textTitle={getProfile.firstname}
        textTitle2={getProfile.lastname}
      />
      <div className="container-page">
        <h2 className="label-champs">Vos coordonnées</h2>
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
          <h2 className="label-champs">Cochez vos compétences *</h2>
          <CompetenceSwitch
            textCompetence="HTML"
            fieldName="html"
            isChecked={getProfile.competences?.find((c) => c.name === "html")}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "html", event)
            }
          />

          <CompetenceSwitch
            textCompetence="CSS"
            isChecked={getProfile.competences?.find((c) => c.name === "css")}
            fieldName="css"
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "css", event)
            }
          />
          <CompetenceSwitch
            textCompetence="JAVASCRIPT"
            fieldName="javascript"
            isChecked={getProfile.competences?.find(
              (c) => c.name === "javascript"
            )}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(
                getProfile,
                "javascript",
                event
              )
            }
          />
          <CompetenceSwitch
            textCompetence="ANGULAR"
            fieldName="angular"
            isChecked={getProfile.competences?.find(
              (c) => c.name === "angular"
            )}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "angular", event)
            }
          />
          <CompetenceSwitch
            textCompetence="REACT.JS"
            fieldName="react"
            isChecked={getProfile.competences?.find((c) => c.name === "react")}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "react", event)
            }
          />
          <CompetenceSwitch
            textCompetence="PHP"
            fieldName="php"
            isChecked={getProfile.competences?.find((c) => c.name === "php")}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "php", event)
            }
          />
          <CompetenceSwitch
            textCompetence="SYMPHONY"
            fieldName="symphony"
            isChecked={getProfile.competences?.find(
              (c) => c.name === "symphony"
            )}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "symphony", event)
            }
          />
          <CompetenceSwitch
            textCompetence="GIT"
            fieldName="git"
            isChecked={getProfile.competences?.find((c) => c.name === "git")}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "git", event)
            }
          />
          <CompetenceSwitch
            textCompetence="GITHUB"
            fieldName="github"
            isChecked={getProfile.competences?.find((c) => c.name === "github")}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "github", event)
            }
          />
          <CompetenceSwitch
            textCompetence="TRELLO"
            fieldName="trello"
            isChecked={getProfile.competences?.find((c) => c.name === "trello")}
            handleChange={(event) =>
              globalContext.handleCheckboxChanged(getProfile, "trello", event)
            }
          />
        </div>
        <AddDetailsCV
          addDetail="Expériences professionnelles"
          url="/profile/add/experience"
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
        <AddDetailsCV addDetail="Formations" url="/profile/add/formation" />
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
