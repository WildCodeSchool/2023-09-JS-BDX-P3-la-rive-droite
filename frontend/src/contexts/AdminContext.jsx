import { useState, createContext, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "./GlobalContext";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const { saveItemInLS, setErrorMsg, setSuccesMsg, setMsgContent } =
    useGlobalContext();

  const [isAdmin, setIsAdmin] = useState(true);

  const [addOffer, setAddOffer] = useState({
    id: uuid(),
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

  // handleChange(setAddOffer);

  const handleAddOffer = (event) => {
    if (
      addOffer.title === "" ||
      addOffer.company === "" ||
      addOffer.city === "" ||
      addOffer.mission === "" ||
      addOffer.searchProfile === "" ||
      addOffer.workPlace === "" ||
      addOffer.salary === "" ||
      addOffer.info === "" ||
      addOffer.email === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      event.preventDefault();
      setOfferSaved((prevData) => [...prevData, addOffer]);
      setMsgContent("L'offre à été ajouté avec");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);
      saveItemInLS("Offer", offerSaved);
    }
  };

  useEffect(() => {}, [offerSaved]);

  const adminContextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      addOffer,
      offerSaved,
      handleAddOffer,
      setAddOffer,
    }),
    [isAdmin, setIsAdmin, addOffer, offerSaved, handleAddOffer, setAddOffer]
  );

  return (
    <AdminContext.Provider value={adminContextValues}>
      {children}
    </AdminContext.Provider>
  );
}

AdminContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminContextProvider;
export const useAdminContext = () => useContext(AdminContext);
