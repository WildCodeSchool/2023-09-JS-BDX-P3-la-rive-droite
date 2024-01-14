import { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Title from "../../components/Titles/Title";

function UserProfileUser() {
  const [getProfile, setGetProfile] = useState({});
  useEffect(() => {
    const getProfileUser = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/user/profile");

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
    <>
      <HeaderLongUser />
      <div className="container-page">
        <Title titleText="Vos coordonnées" />
        <Input
          titleInput="Nom *"
          holderText="test"
          fieldName="lastname"
          value={getProfile.lastname || ""}
        />
        <Input
          titleInput="Prénom *"
          holderText="test"
          fieldName="firstname"
          valueInput={getProfile.firstname || ""}
        />
        <Input
          titleInput="Email *"
          holderText="test"
          fieldName="email"
          valueInput={getProfile.email || ""}
        />
        <Input
          titleInput="Téléphone *"
          holderText="test"
          fieldName="phone"
          typeInput="tel"
          valueInput={getProfile.phone || ""}
        />
        <Input
          titleInput="Addresse *"
          holderText="test"
          fieldName="address"
          inputType="text"
          valueInput={getProfile.address || ""}
        />
      </div>
    </>
  );
}

export default UserProfileUser;
