import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useGlobalContext } from "./GlobalContext";

const LogContext = createContext();

function LogContextProvider({ children }) {
  // Messages d'alertes.
  const { setErrorMsg, setSuccesMsg, setMsgContent, navigate } =
    useGlobalContext();

  const [userConnected, setUserConnected] = useState(false);
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });
  const [showStorage, setShowStorage] = useState([]);

  const getUserFromStorage = () => {
    setShowStorage(JSON.parse(localStorage.getItem("User")));
  };

  const handleSubmitLogIn = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:3310/api/login`,
        logIn
      );
      localStorage.setItem("token", data.token);
      const tokenData = jwtDecode(data.token);
      setSuccesMsg(true);
      setMsgContent(`Bienvenue, connexion avec ${tokenData.firstname}`);
      setTimeout(() => {
        setSuccesMsg(false);
        navigate("/");
      }, 3000);
      setLogIn(tokenData);
      if (tokenData.is_admin === 1) {
        return navigate("/dashboard");
      }
      return navigate("/");
    } catch (err) {
      console.error(err);
      setErrorMsg(true);
      setMsgContent("Identifiants non valides.");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }

    return null;
  };

  // getUserFromStorage();

  // // Compare l'email.
  // for (let i = 0; i < showStorage.length; i += 1) {
  //   // i++
  //   if (
  //     showStorage[i].email === logIn.email &&
  //     showStorage[i].password === logIn.password
  //   ) {
  //     // const idUser = showStorage[i].id;
  //     const nameUser = showStorage[i].userName;
  //     // console.log(nameUser);
  //     // console.log(idUser);

  // break;
  //   } else {
  //
  //   }
  // }
  // };

  const contextValues = useMemo(
    () => ({
      userConnected,
      handleSubmitLogIn,
      logIn,
      setLogIn,
      showStorage,
      setUserConnected,
      getUserFromStorage,
    }),
    [
      userConnected,
      handleSubmitLogIn,
      logIn,
      setLogIn,
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
