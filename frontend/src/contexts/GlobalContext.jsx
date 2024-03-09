import { useState, createContext, useContext, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ApiService from "../services/api.service";

const GlobalContext = createContext();

function GlobalContextProvider({ children, apiService }) {
  const navigate = useNavigate();

  const givenData = useLoaderData();
  const [user, setUser] = useState(givenData?.preloadUser?.data);
  const [isAdmin, setIsAdmin] = useState(
    givenData?.preloadUser?.data?.is_admin
  );

  function unauthorized() {
    if (!isAdmin) {
      navigate("/");
    }
  }

  // Messages d'alertes.
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

  const values = useMemo(
    () => ({
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
