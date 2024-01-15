import { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import HeaderLongUser from "../../components/Headers/HeaderLongUser";
import Title from "../../components/Titles/Title";
import { useGlobalContext } from "../../contexts/GlobalContext";

function UserProfileModel() {
  const { apiService } = useGlobalContext();
  const [getProfile, setGetProfile] = useState({});
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
      </div>
    </>
  );
}

export default UserProfileModel;
