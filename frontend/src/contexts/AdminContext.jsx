import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(true);

  const [addOffer, setAddOffer] = useState({
    title: "",
    company: "",
    city: "",
    mission: "",
    searchProfile: "",
    workPlace: "",
    salary: "",
    info: "",
    email: "",
  });
  const [offerSaved, setOfferSaved] = useState([]);

  const handleChange = (fieldName, event) => {
    setAddOffer((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };

  const handleTest = (event) => {
    event.preventDefault();
    setOfferSaved((prevData) => [...prevData, addOffer]);
    // console.log(offerSaved);
  };

  const contextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      addOffer,
      offerSaved,
      handleTest,
      handleChange,
    }),
    [isAdmin, setIsAdmin, addOffer, offerSaved, handleTest, handleChange]
  );

  return (
    <AdminContext.Provider value={contextValues}>
      {children}
    </AdminContext.Provider>
  );
}

AdminContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminContextProvider;
export const useAdminContext = () => useContext(AdminContext);
