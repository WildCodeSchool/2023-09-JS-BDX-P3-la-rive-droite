import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";

const LogContext = createContext();

function LogContextProvider({ children }) {
  // Messages d'alertes.
  const { setErrorMsg, setSuccesMsg, setMsgContent } = useGlobalContext();

  const [userConnected, setUserConnected] = useState(false);
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });
  const [showStorage, setShowStorage] = useState([]);

  const getUserFromStorage = () => {
    setShowStorage(JSON.parse(localStorage.getItem("User")));
  };

  const handleLogIn = (fieldName, event) => {
    setLogIn((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmitLogIn = () => {
    getUserFromStorage();

    // Compare l'email.
    for (let i = 0; i < showStorage.length; i += 1) {
      // i++
      if (
        showStorage[i].email === logIn.email &&
        showStorage[i].password === logIn.password
      ) {
        // const idUser = showStorage[i].id;
        const nameUser = showStorage[i].userName;
        // console.log(nameUser);
        // console.log(idUser);

        setSuccesMsg(true);
        setMsgContent(`Bienvenue, connexion avec ${nameUser}`);
        setTimeout(() => {
          setSuccesMsg(false);
          navigate("/");
        }, 3000);
        break;
      } else {
        setErrorMsg(true);
        setMsgContent("Identifiants non valides.");
        setTimeout(() => {
          setErrorMsg(false);
        }, 4000);
      }
    }
  };

  const contextValues = useMemo(
    () => ({
      userConnected,
      handleLogIn,
      handleSubmitLogIn,
      logIn,
      showStorage,
      setUserConnected,
      getUserFromStorage,
    }),
    [
      userConnected,
      handleLogIn,
      handleSubmitLogIn,
      logIn,
      showStorage,
      setUserConnected,
      getUserFromStorage,
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
