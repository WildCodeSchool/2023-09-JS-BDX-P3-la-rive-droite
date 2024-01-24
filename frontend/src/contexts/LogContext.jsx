import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "./GlobalContext";

const LogContext = createContext();

function LogContextProvider({ children }) {
  // Messages d'alertes.
  const { apiService, setUser, setSuccesMsg, setMsgContent, navigate, user } =
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
      const data = await apiService.post(
        `http://localhost:3310/api/login`,
        logIn
      );
      localStorage.setItem("token", data.token);

      apiService.setToken(data.token);

      const result = await apiService.get("http://localhost:3310/api/users/me");

      // alert(`Content de vous revoir ${result.data.email}`);
      setUser(result.data);
      setMsgContent(
        `Content de vous revoir ${user.firstname} ${user.lastname}! Connexion effectuée avec`
      );
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
        if (result.data.isAdmin === 1) {
          navigate("/dashboard");
        }
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      // alert(err.message);
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
