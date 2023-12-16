import { Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
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
              <Input
                titleInput="E-mail *"
                holderText="john.doe@externatic.fr"
              />
              <Input titleInput="Mot de passe *" holderText="************" />
              <Link to="/">
                <ButtonMaxi textBtn="Se connecter" />
              </Link>
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
