import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";

const LogContext = createContext();

function LogContextProvider({ children }) {
  // Messages d'alertes.
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

  const [signIn, setSignIn] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
    cguAgree: false,
    addCvNow: false,
  });
  const [userSaved, setUserSaved] = useState([]);
  const [storageData, setStorageData] = useState([]);

  const handleSignIn = (fieldName, event) => {
    setSignIn((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };
  // Enregistrement dans le "Local Storage".
  const saveUser = () => {
    // Condition qui vérifie et remplace les informations existantes.
    const existingData = JSON.parse(localStorage.getItem("User")) || [];
    // Ajout de la methode "isArray" car sinon conflit car il faut les infos
    // dans un tableau pour pouvoir push dans le Local Storage.
    const dataArray = Array.isArray(existingData) ? existingData : [];
    const newData = dataArray.concat(signIn);
    // Sauvegarder le nouveau tableau dans le local storage
    localStorage.setItem("User", JSON.stringify(newData));
    // Fonction qui met à jour l'Etat du local storage.
    const getLocalStorageData = () => {
      setStorageData(newData);
    };
    getLocalStorageData();
  };

  const handleSubmitSignIn = (event) => {
    if (
      signIn.userName === "" ||
      signIn.email === "" ||
      signIn.password === "" ||
      signIn.password2 === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Champs non remplis");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (signIn.password !== signIn.password2) {
      setErrorMsg(true);
      setMsgContent("Les mots de passes ne sont pas identiques");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      setSuccesMsg(true);
      setMsgContent("Compte créer avec");
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);

      event.preventDefault();
      setUserSaved((prevData) => [...prevData, signIn]);
      // Réinitialise les valeurs d'input à vide.
      setSignIn({
        userName: "",
        email: "",
        password: "",
        password2: "",
      });

      saveUser();
    }
  };

  const handleCheckboxChange = (fieldName) => {
    setSignIn((prevData) => ({
      ...prevData,
      [fieldName]: !prevData[fieldName],
    }));
  };

  // useEffect(() => {
  //   console.log("Le formulaire à bien été mis à jours.", userSaved);
  // }, [userSaved]);

  const contextValues = useMemo(
    () => ({
      signIn,
      setSignIn,
      handleSignIn,
      handleSubmitSignIn,
      userSaved,
      setUserSaved,
      errorMsg,
      succesMsg,
      msgContent,
      handleCheckboxChange,
      storageData,
    }),
    [
      signIn,
      setSignIn,
      handleSignIn,
      handleSubmitSignIn,
      userSaved,
      setUserSaved,
      errorMsg,
      succesMsg,
      msgContent,
      handleCheckboxChange,
      storageData,
    ]
  );

  return (
    <LogContext.Provider value={contextValues}>{children}</LogContext.Provider>
  );
}

LogContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LogContextProvider;
export const useLogContext = () => useContext(LogContext);
