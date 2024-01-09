import { useState, createContext, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useGlobalContext } from "./GlobalContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const { saveItemInLS, setErrorMsg, setSuccesMsg, setMsgContent } =
    useGlobalContext();

  const [editProfile, setEditProfile] = useState({
    id: uuid(),
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [profileSaved, setProfileSaved] = useState([]);

  const [addSkills, setAddSkills] = useState({
    html: false,
    css: false,
    javascript: false,
    angular: false,
    react: false,
    php: false,
    symphony: false,
    git: false,
    github: false,
    trello: false,
  });

  const handleSubmitProfile = () => {
    const updatedProfile = {
      ...editProfile,
      skills: addSkills,
    };

    setProfileSaved((prevData) => {
      const newData = [...prevData, updatedProfile];
      setMsgContent("Le profil a été modifié avec");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);
      saveItemInLS("Profile", newData);
      return newData;
    });
  };
  const [addXp, setAddXp] = useState({
    id: uuid(),
    title: "",
    company: "",
    city: "",
    type: "",
    isWorking: false,
    dateBegin: "",
    dateEnd: "",
    description: "",
  });
  const [xpSaved, setXpSaved] = useState([]);

  const handleAddXp = async (event) => {
    event.preventDefault();
    if (
      addXp.title === "" ||
      addXp.company === "" ||
      addXp.type === "" ||
      addXp.city === "" ||
      addXp.description === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }
    if (
      addXp.isWorking === false &&
      (addXp.dateEnd === "" || addXp.dateBegin === "")
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }
    if (addXp.isWorking === true && addXp.dateBegin === "") {
      setErrorMsg(true);
      setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      try {
        // const data =
        await axios.post(`http://localhost:3310/api/experience/`, addXp);

        setXpSaved((prevData) => [...prevData, addXp]);
        setMsgContent("L'expérience a été ajoutée avec");
        setSuccesMsg(true);
        setTimeout(() => {
          setSuccesMsg(false);
        }, 4000);
        saveItemInLS("Experience", xpSaved);
      } catch (err) {
        console.error(err);
        setErrorMsg(true);
        setMsgContent("Formulaire incorrect");
        setTimeout(() => {
          setErrorMsg(false);
        }, 4000);
      }
    }
  };
  useEffect(() => {}, [xpSaved]);

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
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      event.preventDefault();
      setCvSaved((prevData) => [...prevData, addCv]);
      setMsgContent("Votre CV a été ajouté avec");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);
      saveItemInLS("CV", cvSaved);
    }
  };
  useEffect(() => {}, [cvSaved]);

  const userContextValues = useMemo(
    () => ({
      editProfile,
      setEditProfile,
      profileSaved,
      addSkills,
      setAddSkills,
      handleSubmitProfile,
      addXp,
      setAddXp,
      xpSaved,
      setXpSaved,
      handleAddXp,
      addCv,
      setAddCv,
      handleAddCv,
    }),
    [
      editProfile,
      setEditProfile,
      profileSaved,
      addSkills,
      setAddSkills,
      handleSubmitProfile,
      addXp,
      setAddXp,
      xpSaved,
      setXpSaved,
      handleAddXp,
      addCv,
      handleAddXp,
      setAddCv,
      handleAddCv,
    ]
  );

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
