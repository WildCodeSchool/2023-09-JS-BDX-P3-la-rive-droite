import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const contextValues = useMemo(
    () => ({
      profileInfo,
      setProfileInfo,
    }),
    [profileInfo, setProfileInfo]
  );

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
