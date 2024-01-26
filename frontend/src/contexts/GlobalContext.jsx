import { useState, createContext, useContext, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ApiService from "../services/api.service";

const GlobalContext = createContext();

function GlobalContextProvider({ children, apiService }) {
  // Messages d'alertes.
  const givenData = useLoaderData();
  const [isAdmin, setIsAdmin] = useState(
    givenData?.preloadUser?.data?.is_admin
  );
  const [user, setUser] = useState(givenData?.preloadUser?.data);
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

  const navigate = useNavigate();

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
    callback((prevData) => {
      const newValue = !prevData[fieldName];
      return {
        ...prevData,
        [fieldName]: newValue,
      };
    });
  };

  const handleLogout = () => {
    localStorage.setItem("token", null);
    apiService.setToken(null);
    setUser(null);
    setIsAdmin(null);
    // eslint-disable-next-line no-alert
    alert(`Déconnexion réussie`);
    return navigate("/");
  };

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const goToOffer = (id) => {
    navigate(`/offer/${id}`);
  };

  function unauthorized() {
    if (!isAdmin) {
      navigate("/");
    }
  }

  // const handleLog = () => {
  //   console.log(isAdmin);
  // };

  // Renvoie sur la lien de l'offre avec le bon "id".
  // const viewOffer = async (id) => {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/offer/${id}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       // setOffers(data);
  //       navigate(`/offer/${id}`);
  //     } else {
  //       console.error("Echec de la récupération des données.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
      isAdmin,
      setIsAdmin,
      user,
      setUser,
      apiService,
      handleLogout,
      goToOffer,
      unauthorized,
      // handleLog,
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
      isAdmin,
      setIsAdmin,
      user,
      setUser,
      apiService,
      handleLogout,
      goToOffer,
      unauthorized,
      // handleLog,
    ]
  );

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
