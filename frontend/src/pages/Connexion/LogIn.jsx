import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
// import { useLogContext } from "../../contexts/LogContext";

function Login() {
  // const { handleSubmit, signIn } = useLogContext();

  return (
    <>
      <HeaderLongTitle textTitle="Connexion" />
      <div className="container-page container-general-login">
        <h1> Se connecter</h1>
        <form>
          <div className="champs-form">
            <div>
              <Input titleInput="E-mail" holderText="john.doe@externatic.fr" />
              <Input titleInput="Mot de passe" holderText="************" />
              <ButtonMaxi textBtn="Se connecter" />
            </div>
          </div>
        </form>

        <div className="small-paragraphe-info">
          <p>
            Vous n'avez pas de compte ? <span> Inscrivez-vous ! </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
