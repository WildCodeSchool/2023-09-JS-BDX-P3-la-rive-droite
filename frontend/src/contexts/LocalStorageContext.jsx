import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const LocalStorageContext = createContext();

function LocalStorageContextProvider({ children }) {
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

  const contextValues = useMemo(
    () => ({
      getItemInLS,
      saveItemInLS,
      handleChange,
    }),
    [getItemInLS, saveItemInLS, handleChange]
  );

  return (
    <LocalStorageContext.Provider value={contextValues}>
      {children}
    </LocalStorageContext.Provider>
  );
}

LocalStorageContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LocalStorageContextProvider;

export const useLocalStorageContext = () => useContext(LocalStorageContext);
