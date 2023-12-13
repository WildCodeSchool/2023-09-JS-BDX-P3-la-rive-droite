import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import ButtonMini from "../../components/Boutons/ButtonMini";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import "../../components/Inputs/checkbox-conditions.css";

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
