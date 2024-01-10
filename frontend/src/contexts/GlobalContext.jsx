import { useState, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  // Messages d'alertes.
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

  const getItemInLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const saveItemInLS = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleChange = (callback, fieldName, event) => {
    callback((previousData) => ({
      ...previousData,
      [fieldName]: event.target.value,
    }));
  };

  const handleCheckboxChange = (callback, fieldName) => {
    callback((prevData) => ({
      ...prevData,
      [fieldName]: !prevData[fieldName],
    }));
  };

  const navigate = useNavigate();

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const values = useMemo(
    () => ({
      getItemInLS,
      saveItemInLS,
      handleChange,
      handleCheckboxChange,
      errorMsg,
      setErrorMsg,
      succesMsg,
      setSuccesMsg,
      msgContent,
      setMsgContent,
      navigate,
      emailRegex,
      passwordRegex,
    }),
    [
      getItemInLS,
      saveItemInLS,
      handleChange,
      handleCheckboxChange,
      errorMsg,
      setErrorMsg,
      succesMsg,
      setSuccesMsg,
      msgContent,
      setMsgContent,
      navigate,
      emailRegex,
      passwordRegex,
    ]
  );

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
