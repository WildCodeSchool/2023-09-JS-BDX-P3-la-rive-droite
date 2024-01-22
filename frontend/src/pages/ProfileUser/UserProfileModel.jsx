import { useLoaderData } from "react-router-dom";
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

function UserProfileModel() {
  const { handleAddCv } = useUserContext();
  const { errorMsg, succesMsg, msgContent, apiService } = useGlobalContext();

  const [getProfile, setGetProfile] = useState({});
  const { experiences, courses } = useLoaderData();

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
  return (
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
  );
}

export default UserProfileModel;
