import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const [userConnected, setUserConnected] = useState(false);
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });
  const [showStorage, setShowStorage] = useState([]);

  const getUserFromStorage = () => {
    setShowStorage(localStorage.getItem("User"));
  };

  const handleLogIn = (fieldName, event) => {
    setLogIn((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };

  const handleSubmitLogIn = () => {};

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
