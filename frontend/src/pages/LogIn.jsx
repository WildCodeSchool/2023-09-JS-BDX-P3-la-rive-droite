import "../style/style_pages/login-signin.css";
import "../style/style_components/button-maxi.css";
import Input from "../components/Input";
import ButtonMaxi from "../components/ButtonMaxi";

function Login() {
  return (
    <div className="container-general-login">
      <div className="container-login">
        <h1> Se connecter</h1>
        <form>
          <div className="champs-form">
            <div>
              <Input />
              <Input />
              <Input />
              <ButtonMaxi />
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
