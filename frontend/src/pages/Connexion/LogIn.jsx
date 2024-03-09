import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function Login() {
  const navigate = useNavigate();
  const globalContext = useGlobalContext();
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogIn = async () => {
    try {
      const data = await globalContext.apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        logIn
      );
      localStorage.setItem("token", data.token);

      globalContext.apiService.setToken(data.token);

      const result = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
      );

      globalContext.setUser(result.data);
      globalContext.setIsAdmin(result.data.is_admin);
      globalContext.setMsgContent(
        `Content de vous revoir ${result.data.firstname} ${result.data.lastname}! Connexion effectuée avec`
      );
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
        if (result.data.is_admin === 1) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (err) {
      console.error(err);
      globalContext.setMsgContent(`Mot de passe ou identifiant incorrect`);
      globalContext.setErrorMsg(true);
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    }
    return null;
  };

  return (
    <>
      <HeaderLongTitle textTitle="Connexion" />
      <div id="log" className="container-page with-rounded-border">
        <h1> Se connecter</h1>
        <form>
          <div className="champs-form">
            <div>
              <Input
                titleInput="E-mail *"
                holderText="john.doe@externatic.fr"
                fieldName="email"
                valueInput={logIn}
                handleChange={(event) =>
                  globalContext.handleChange(setLogIn, "email", event)
                }
              />
              <Input
                titleInput="Mot de passe *"
                holderText="************"
                fieldName="password"
                typeInput="password"
                valueInput={logIn}
                handleChange={(event) =>
                  globalContext.handleChange(setLogIn, "password", event)
                }
              />
              <div>
                {globalContext.errorMsg && (
                  <ErrorMsg message={globalContext.msgContent} />
                )}
                {globalContext.succesMsg && (
                  <SuccesMsg message={globalContext.msgContent} />
                )}
              </div>
              <ButtonMaxi
                textBtn="Se connecter"
                clickFunc={handleSubmitLogIn}
              />
            </div>
          </div>
        </form>

        <div className="small-paragraphe-info">
          <p>
            Vous n'avez pas de compte ?
            <Link to="/signin">
              <span>Inscrivez-vous !</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
