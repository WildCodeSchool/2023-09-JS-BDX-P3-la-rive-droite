import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";

const LogContext = createContext();

function LogContextProvider({ children }) {
  // Messages d'alertes.
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [signIn, setSignIn] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [userSaved, setUserSaved] = useState([]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignIn = (fieldName, event) => {
    setSignIn((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
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
    } else if (signIn.password !== signIn.password2) {
      setErrorMsg(true);
      setMsgContent("Les mots de passes ne sont pas identiques !");
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
    }
  };

  // useEffect(() => {
  //   console.log("Le formulaire à bien été mis à jours.", userSaved);
  //   console.log("L'état est à", isChecked);
  // }, [userSaved, isChecked]);

  const contextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      signIn,
      setSignIn,
      handleSignIn,
      handleSubmitSignIn,
      userSaved,
      setUserSaved,
      handleCheckboxChange,
      errorMsg,
      succesMsg,
      msgContent,
    }),
    [
      isAdmin,
      setIsAdmin,
      signIn,
      setSignIn,
      handleSignIn,
      handleSubmitSignIn,
      userSaved,
      setUserSaved,
      handleCheckboxChange,
      errorMsg,
      succesMsg,
      msgContent,
    ]
  );

  return (
    <LogContext.Provider value={contextValues}>{children}</LogContext.Provider>
  );
}

LogContextProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LogContextProvider;
export const useLogContext = () => useContext(LogContext);
