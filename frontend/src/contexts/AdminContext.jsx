import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useGlobalContext } from "./GlobalContext";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const { isAdmin, setIsAdmin, navigate } = useGlobalContext();

  const [addOffer, setAddOffer] = useState({
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

  /* Redirection bouton du dashboard. */
  const handleAddOffer = () => {
    navigate("/dashboard/offer");
  };

  const handleOffers = () => {
    navigate("/dashboard");
  };

  const handleUsers = () => {
    navigate("/dashboard/user");
  };

  const goToEditOffer = (id) => {
    navigate(`/dashboard/edit-offer/${id}`);
  };

  const goToEditUser = (id) => {
    navigate(`/dashboard/edit-user/${id}`);
  };

  const contextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      addOffer,
      setAddOffer,
      handleAddOffer,
      handleOffers,
      handleUsers,
      goToEditOffer,
      goToEditUser,
    }),
    [
      isAdmin,
      setIsAdmin,
      addOffer,
      setAddOffer,
      handleUsers,
      handleAddOffer,
      handleOffers,
      goToEditOffer,
      goToEditUser,
    ]
  );

  return (
    <AdminContext.Provider value={contextValues}>
      {children}
    </AdminContext.Provider>
  );
}

AdminContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminContextProvider;
export const useAdminContext = () => useContext(AdminContext);
