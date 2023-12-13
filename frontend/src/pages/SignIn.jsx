import Input from "../components/Input";
import ButtonMaxi from "../components/ButtonMaxi";
import CheckboxCondition from "../components/CheckboxCondition";
import ButtonMini from "../components/ButtonMini";
import "../style/style_pages/login-signin.css";
import "../style/style_components/button-maxi.css";
import "../style/style_components/checkbox-conditions.css";

function SignIn() {
  return (
    <div className="container-general-login">
      <div className="container-login">
        <h1>S'inscrire</h1>
        <form>
          <div className="champs-form">
            <div>
              <Input titleInput="Nom d'utilisateur" holderText="John Doe" />
              <Input titleInput="E-mail" holderText="john.doe@externatic.fr" />
              <Input titleInput="Mot de passe" holderText="************" />
              <Input
                titleInput="Confirmer le mot de passe"
                holderText="************"
              />
              <CheckboxCondition textCondition="J'accepte les conditions d'" />
              <CheckboxCondition textCondition="Je veux créer ou télécharger mon cv maintenant !" />
              <ButtonMaxi textBtn="S'inscrire" />
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
