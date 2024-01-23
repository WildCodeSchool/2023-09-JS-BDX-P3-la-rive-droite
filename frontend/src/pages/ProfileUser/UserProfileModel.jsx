import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Title from "../../components/Titles/Title";
import { useGlobalContext } from "../../contexts/GlobalContext";
import AddDetailsCV from "../../components/Add Something/AddSomething";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import { useUserContext } from "../../contexts/UserContext";
import CardFormation from "../../components/CardModel/CardFormation";
import CardExperience from "../../components/CardModel/CardExperience";

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
  } = useGlobalContext();
  const navigate = useNavigate();

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
    getUserProfile();
  }, []);
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
          valueInput="coucou"
          disabled
        />
        <Input
          titleInput="Prénom *"
          holderText={getProfile.firstname}
          fieldName="firstname"
          valueInput="test"
        />
        <Input
          titleInput="Email *"
          holderText={getProfile.email}
          fieldName="email"
          valueInput="test"
        />
        <Input
          titleInput="Téléphone *"
          holderText={getProfile.phone}
          fieldName="phone"
          typeInput="tel"
          valueInput="test"
        />
        <Input
          titleInput="Addresse *"
          holderText={getProfile.address}
          fieldName="address"
          inputType="text"
          valueInput="test"
        />
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
