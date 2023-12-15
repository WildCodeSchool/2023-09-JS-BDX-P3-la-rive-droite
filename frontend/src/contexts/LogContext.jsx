import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [signIn, setSignIn] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [userSaved, setUserSaved] = useState([]);

  const handleSignIn = (fieldName, event) => {
    setSignIn((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };

  // const handleSignIn = (event) => {
  //   let value = event.target.value;
  //   setSignIn(...value, signIn);
  //   console.log(signIn);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserSaved((prevData) => [...prevData, signIn]);
    // console.log("Formulaire enregistré.");
    // console.log(userSaved);
    // Réinitialise les valeurs d'input à vide.
    setSignIn({
      userName: "",
      email: "",
      password: "",
    });
  };

  const contextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      signIn,
      setSignIn,
      handleSignIn,
      handleSubmit,
      userSaved,
      setUserSaved,
    }),
    [
      isAdmin,
      setIsAdmin,
      signIn,
      setSignIn,
      handleSignIn,
      handleSubmit,
      userSaved,
      setUserSaved,
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
