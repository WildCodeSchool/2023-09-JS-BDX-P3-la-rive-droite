import "../style/style_pages/login-signin.css";
import "../style/style_components/button-maxi.css";
import "../style/style_components/checkbox-conditions.css";
import Input from "../components/Input";
import ButtonMaxi from "../components/ButtonMaxi";
import CheckboxCondition from "../components/CheckboxCondition";
import ButtonMini from "../components/ButtonMini";

function SignIn() {
  return (
    <div className="container-general-login">
      <div className="container-login">
        <h1>S'inscrire</h1>
        <form>
          <div className="champs-form">
            <div>
              <Input />
              <Input />
              <CheckboxCondition />
              <CheckboxCondition />
              <CheckboxCondition />
              <ButtonMaxi />
              <ButtonMini />
            </div>
          </div>
        </form>

        <div className="small-paragraphe-info">
          <p>
            Vous avez déjà un compte ? <span>Connectez-vous</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
