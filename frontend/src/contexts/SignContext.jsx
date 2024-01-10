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

  const [userConnected, setUserConnected] = useState(false);
  const [userSaved, setUserSaved] = useState([]);

  // Enregistrement dans le "Local Storage".
  // const saveUser = async (newUser) => {
  //   try {
  //     const { data } = await axios.post(
  //       `http://localhost:3310/api/signin`,
  //       newUser
  //     );
  //     localStorage.setItem("token", data.token);
  //     const tokenData = jwtDecode(data.token);
  //     setUserSaved(
  //       await axios.post("http://localhost:3310/api/users", newUser)
  //     );
  //     setSuccesMsg(true);
  //     setMsgContent(`Bienvenue, connexion avec ${tokenData.firstname}`);
  //     setTimeout(() => {
  //       setSuccesMsg(false);
  //       navigate("/");
  //     }, 3000);
  //   } catch (err) {
  //     setErrorMsg(true);
  //     setMsgContent("Identifiants non valides.");
  //     setTimeout(() => {
  //       setErrorMsg(false);
  //     }, 4000);
  //   }
  // };

  const contextValues = useMemo(
    () => ({
      signIn,
      setSignIn,
      userSaved,
      setUserSaved,
      // handleCheckboxChange,
      userConnected,
      setUserConnected,
    }),
    [
      signIn,
      setSignIn,
      userSaved,
      setUserSaved,
      // handleCheckboxChange,
      userConnected,
      setUserConnected,
    ]
  );

  return (
    <SignContext.Provider value={contextValues}>
      {children}
    </SignContext.Provider>
  );
}

SignContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SignContextProvider;
export const useSignContext = () => useContext(SignContext);
