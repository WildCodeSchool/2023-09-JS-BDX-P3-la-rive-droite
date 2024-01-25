import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "./GlobalContext";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const globalContext = useGlobalContext();

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
      const data = await globalContext.apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        logIn
      );
      localStorage.setItem("token", data.token);

      globalContext.apiService.setToken(data.token);

      const result = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
      );

      // alert(`Content de vous revoir ${result.data.email}`);
      // console.log(isAdmin);
      globalContext.setUser(result.data);
      globalContext.setIsAdmin(result.data.is_admin);
      globalContext.setMsgContent(
        `Content de vous revoir ${result.data.firstname} ${result.data.lastname}! Connexion effectuée avec`
      );
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
        if (result.data.is_admin === 1) {
          globalContext.navigate("/dashboard");
        }
        globalContext.navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      globalContext.setMsgContent(`Mot de passe ou identifiant incorrect`);
      globalContext.setErrorMsg(true);
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
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
  children: PropTypes.node.isRequired,
};

export default LogContextProvider;
export const useLogContext = () => useContext(LogContext);
