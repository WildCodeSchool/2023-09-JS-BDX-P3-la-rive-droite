import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useGlobalContext } from "./GlobalContext";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const { setErrorMsg, setSuccesMsg, setMsgContent } = useGlobalContext();
  const { isAdmin, setIsAdmin } = useGlobalContext();

  const [addOffer, setAddOffer] = useState({
    id: uuid(),
    title: "",
    company: "",
    type: "",
    city: "",
    mission: "",
    search_profile: "",
    work_place: "",
    salary: "",
    info: "",
    email: "",
  });

  const handleAddOffer = async () => {
    if (
      addOffer.title === "" ||
      addOffer.company === "" ||
      addOffer.type === "" ||
      addOffer.city === "" ||
      addOffer.mission === "" ||
      addOffer.search_profile === "" ||
      addOffer.work_place === "" ||
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
      // try {
      axios.post(`http://localhost:3310/api/offer`, addOffer);
      // } catch (err) {
      //   console.error(err);
      //   setErrorMsg(true);
      //   setMsgContent("Veuillez remplir tous les champs");
      //   setTimeout(() => {
      //     setErrorMsg(false);
      //   }, 4000);
      // }

      setMsgContent("L'offre à été ajouté avec");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);

      setAddOffer({
        title: "",
        company: "",
        type: "",
        city: "",
        mission: "",
        search_profile: "",
        work_place: "",
        salary: "",
        info: "",
        email: "",
      });
      // saveItemInLS("Offer", offerSaved);
    }
  };

  const contextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      addOffer,
      setAddOffer,
      handleAddOffer,
    }),
    [isAdmin, setIsAdmin, addOffer, handleAddOffer, setAddOffer]
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
