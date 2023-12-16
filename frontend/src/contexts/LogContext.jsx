import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [signIn, setSignIn] = useState({
    userName: "",
    email: "",
    password: "",
    CguAgree: false,
    addCvNow: false,
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
      signIn.userName !== "" &&
      signIn.email !== "" &&
      signIn.password !== ""
    ) {
      event.preventDefault();
      setUserSaved((prevData) => [...prevData, signIn]);
      // Réinitialise les valeurs d'input à vide.
      setSignIn({
        userName: "",
        email: "",
        password: "",
        CguAgree: false,
        addCvNow: false,
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
