import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";

function Login() {
  return (
    <div className="container-general-login">
      <div className="container-login">
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
    </div>
  );
}

export default Login;
