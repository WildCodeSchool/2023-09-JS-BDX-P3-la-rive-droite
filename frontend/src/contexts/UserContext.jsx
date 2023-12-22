import { useState, createContext, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "./GlobalContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const { saveItemInLS, setErrorMsg, setSuccesMsg, setMsgContent } =
    useGlobalContext();

  const [addXp, setAddXp] = useState({
    id: uuid(),
    title: "",
    company: "",
    city: "",
    contract: "",
    isWorking: false,
    dateBeggin: "",
    dateEnd: "",
    description: "",
  });
  const [xpSaved, setXpSaved] = useState([]);

  const handleAddXp = (event) => {
    if (
      addXp.title === "" ||
      addXp.company === "" ||
      addXp.city === "" ||
      addXp.description === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      event.preventDefault();
      setXpSaved((prevData) => [...prevData, addXp]);
      setMsgContent("L'expérience a été ajoutée avec");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(true);
      }, 4000);
      saveItemInLS("Experience", xpSaved);
    }
  };

  useEffect(() => {}, [xpSaved]);

  const userContextValues = useMemo(
    () => ({
      addXp,
      setAddXp,
      xpSaved,
      setXpSaved,
      handleAddXp,
    }),
    [addXp, setAddXp, xpSaved, setXpSaved, handleAddXp]
  );

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  );
}
UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
