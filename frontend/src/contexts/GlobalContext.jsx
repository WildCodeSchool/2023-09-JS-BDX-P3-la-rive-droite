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
      handleChange,
      handleCheckboxChange,
      errorMsg,
      setErrorMsg,
      succesMsg,
      setSuccesMsg,
      msgContent,
      setMsgContent,
      isAdmin,
      setIsAdmin,
      user,
      setUser,
      apiService,
      unauthorized,
    }),
    [
      handleChange,
      handleCheckboxChange,
      errorMsg,
      setErrorMsg,
      succesMsg,
      setSuccesMsg,
      msgContent,
      setMsgContent,
      isAdmin,
      setIsAdmin,
      user,
      setUser,
      apiService,
      unauthorized,
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
