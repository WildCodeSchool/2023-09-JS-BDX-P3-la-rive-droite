import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [addXp, setAddXp] = useState({
    id: uuid(),
    title: "",
    compagny: "",
    city: "",
    isWorking: false,
    duration: "",
    description: "",
  });
  const [XpSaved, setXpSaved] = useState([]);

  // const handleChange = (fieldName, event) => {
  //   setAddOffer((prevData) => ({
  //     ...prevData,
  //     [fieldName]: event.target.value,
  //   }));
  // };

  // const handleChange = (callback, fieldName, event) => {
  //   callback((prevData) => ({
  //     ...prevData,
  //     [fieldName]: event.target.value,
  //   }));
  // };
  const userContextValues = useMemo(
    () =>
      ({
        addXp,
        setAddXp,
        XpSaved,
        setXpSaved,
      })[(addXp, setAddXp, XpSaved, setXpSaved)]
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
