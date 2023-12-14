import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //   };

  const contextValues = useMemo(
    () => [
      userName,
      setUserName,
      email,
      setEmail,
      password,
      setPassword,
      isAdmin,
      setIsAdmin,
    ],
    [
      userName,
      setUserName,
      email,
      setEmail,
      password,
      setPassword,
      isAdmin,
      setIsAdmin,
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
