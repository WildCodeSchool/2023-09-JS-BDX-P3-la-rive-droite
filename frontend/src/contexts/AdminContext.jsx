import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(true);
  // Messages d'alertes.
  const [errorMsg, setErrorMsg] = useState(false);
  const [succesMsg, setSuccesMsg] = useState(false);
  const [msgContent, setMsgContent] = useState("");

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
        setSuccesMsg(true);
      }, 4000);
    }
  };

  // useEffect(() => {
  //   console.log(offerSaved);
  // }, [offerSaved]);

  const contextValues = useMemo(
    () => ({
      isAdmin,
      errorMsg,
      setIsAdmin,
      addOffer,
      offerSaved,
      handleAddOffer,
      setAddOffer,
      succesMsg,
      msgContent,
    }),
    [
      isAdmin,
      setIsAdmin,
      addOffer,
      offerSaved,
      handleAddOffer,
      setAddOffer,
      errorMsg,
      succesMsg,
      msgContent,
    ]
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
