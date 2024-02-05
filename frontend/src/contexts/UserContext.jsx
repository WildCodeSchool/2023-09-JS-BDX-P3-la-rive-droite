import { useState, createContext, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "./GlobalContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const globalContext = useGlobalContext();

  const [getSkills, setGetSkills] = useState([]);

  const [editProfile, setEditProfile] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  // const [profileSaved, setProfileSaved] = useState([]);

  // const handleSubmitProfile = () => {
  //   const updatedProfile = {
  //     ...editProfile,
  //     skills: addSkills,
  //   };

  //   setProfileSaved((prevData) => {
  //     const newData = [...prevData, updatedProfile];
  //     setMsgContent("Le profil a été modifié avec");
  //     setSuccesMsg(true);
  //     setTimeout(() => {
  //       setSuccesMsg(false);
  //     }, 2000);
  //     saveItemInLS("Profile", newData);
  //     return newData;
  //   });

  const [addCv, setAddCv] = useState({
    id: uuid(),
    title: "",
    lastName: "",
    firstName: "",
    email: "",
    number: "",
    adress: "",
  });

  const [cvSaved, setCvSaved] = useState([]);

  const handleAddCv = (event) => {
    if (
      addCv.title === "" ||
      addCv.lastName === "" ||
      addCv.firstName === "" ||
      addCv.email === "" ||
      addCv.number === "" ||
      addCv.adress === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    } else {
      event.preventDefault();
      setCvSaved((prevData) => [...prevData, addCv]);
      globalContext.setMsgContent("Votre CV a été ajouté avec");
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 2000);
      globalContext.saveItemInLS("CV", cvSaved);
    }
  };
  useEffect(() => {}, [cvSaved]);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (idAnnonce) => {
    const newListe = [...favorites, idAnnonce];
    setFavorites(newListe);
  };

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

  const userContextValues = useMemo(
    () => ({
      editProfile,
      setEditProfile,
      addCv,
      setAddCv,
      handleAddCv,
      toggleFavorite,
      handleCheckboxChanged,
    }),
    [
      editProfile,
      setEditProfile,
      addCv,
      setAddCv,
      handleAddCv,
      toggleFavorite,
      handleCheckboxChanged,
    ]
  );

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
