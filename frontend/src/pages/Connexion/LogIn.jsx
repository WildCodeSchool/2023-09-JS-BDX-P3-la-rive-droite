import { Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useLogContext } from "../../contexts/LogContext";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";

function Login() {
  const { errorMsg, succesMsg, msgContent, handleChange } = useGlobalContext();
  const { logIn, setLogIn, handleSubmitLogIn } = useLogContext();

  return (
    <>
      <HeaderLongTitle textTitle="Connexion" />
      <div className="container-page container-general-login">
        <h1> Se connecter</h1>
        <form>
          <div className="champs-form">
            <div>
              <Input
                titleInput="E-mail *"
                holderText="john.doe@externatic.fr"
                fieldName="email"
                valueInput={logIn}
                handleChange={(event) => handleChange(setLogIn, "email", event)}
              />
              <Input
                titleInput="Mot de passe *"
                holderText="************"
                fieldName="password"
                typeInput="password"
                valueInput={logIn}
                handleChange={(event) =>
                  handleChange(setLogIn, "password", event)
                }
              />
              <div>
                {errorMsg && <ErrorMsg message={msgContent} />}
                {succesMsg && <SuccesMsg message={msgContent} />}
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
