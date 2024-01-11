import PropTypes from "prop-types";
import { useState, createContext, useContext, useMemo } from "react";
import { v4 as uuid } from "uuid";

const SignContext = createContext();

function SignContextProvider({ children }) {
  const [signIn, setSignIn] = useState({
    id: uuid(),
    email: "",
    password: "",
    password2: "",
    lastname: "",
    firstname: "",
    phone: "",
    address: "",
    cguAgree: false,
    addCvNow: false,
  });

  const [skills, setSkills] = useState({
    html: false,
    css: false,
    javascript: false,
    angular: false,
    react: false,
    php: false,
    symphony: false,
    git: false,
    github: false,
    trello: false,
  });

  const contextValues = useMemo(
    () => ({
      signIn,
      setSignIn,
      skills,
      setSkills,
    }),
    [signIn, setSignIn, skills, setSkills]
  );

  return (
    <SignContext.Provider value={contextValues}>
      {children}
    </SignContext.Provider>
  );
}

SignContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SignContextProvider;
export const useSignContext = () => useContext(SignContext);
