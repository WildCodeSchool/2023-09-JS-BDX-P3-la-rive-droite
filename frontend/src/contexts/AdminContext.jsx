import { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "./GlobalContext";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  // const { setErrorMsg, setSuccesMsg, setMsgContent } = useGlobalContext();
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

  const contextValues = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      addOffer,
      setAddOffer,
    }),
    [isAdmin, setIsAdmin, addOffer, setAddOffer]
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
