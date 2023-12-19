import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const SignContext = createContext();

function SignContextProvider({ children }) {
  // Messages d'alertes.
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

  const [signIn, setSignIn] = useState({
    id: uuid(),
    userName: "",
    email: "",
    password: "",
    password2: "",
    cguAgree: false,
    addCvNow: false,
  });
  const [userConnected, setUserConnected] = useState(false);
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

  const navigate = useNavigate();
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleCheckboxChange = (fieldName) => {
    setSignIn((prevData) => ({
      ...prevData,
      [fieldName]: !prevData[fieldName],
    }));
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
    } else if (!emailRegex.test(signIn.email)) {
      setErrorMsg(true);
      setMsgContent("L'adresse mail n'est pas correcte");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (signIn.password.length < 8) {
      setErrorMsg(true);
      setMsgContent("Le mot de passe n'est pas assez long");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (!passwordRegex.test(signIn.password)) {
      setErrorMsg(true);
      setMsgContent(
        "Le mot de passe doit contenir au moins : 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spéciale(@$!%*?&)"
      );
      setTimeout(() => {
        setErrorMsg(false);
      }, 6000);
    } else if (signIn.password !== signIn.password2) {
      setErrorMsg(true);
      setMsgContent("Les mots de passes ne sont pas identiques");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (signIn.cguAgree === false) {
      setErrorMsg(true);
      setMsgContent("Vous n'avez pas validé les conditions générales");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      setSuccesMsg(true);
      setMsgContent("Compte créé avec");
      setTimeout(() => {
        setSuccesMsg(false);
      }, 2000);

      event.preventDefault();
      setUserSaved((prevData) => [...prevData, signIn]);
      // Réinitialise les valeurs d'input à vide.
      setSignIn({
        userName: "",
        email: "",
        password: "",
        password2: "",
      });

      setUserConnected(true);
      saveUser();

      if (signIn.addCvNow === true) {
        setTimeout(() => {
          navigate("/edit-profile/cv");
        }, 2000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
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
      userConnected,
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
      userConnected,
    ]
  );

  return (
    <SignContext.Provider value={contextValues}>
      {children}
    </SignContext.Provider>
  );
}

SignContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SignContextProvider;
export const useSignContext = () => useContext(SignContext);
