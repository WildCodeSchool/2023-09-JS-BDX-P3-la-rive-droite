import Input from "../../components/Inputs/Input";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import "../../components/Inputs/checkbox-conditions.css";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import { useLogContext } from "../../contexts/LogContext";

function SignIn() {
  const { errorMsg, succesMsg, msgContent } = useLogContext();

  return (
    <>
      <HeaderLongTitle textTitle="Création de votre compte" />
      <div className="container-page container-general-login">
        <h1>S'inscrire</h1>
        <div className="champs-form">
          <div>
            <Input
              titleInput="Nom d'utilisateur"
              holderText="John Doe"
              showInput
              fieldName="userName"
            />
            <Input
              titleInput="E-mail"
              holderText="john.doe@externatic.fr"
              showInput
              fieldName="email"
              typeInput="email"
            />
            <Input
              titleInput="Mot de passe"
              holderText="************"
              showInput
              fieldName="password"
              typeInput="password"
            />
            <Input
              titleInput="Confirmer le mot de passe"
              holderText="************"
              showInput
              fieldName="password2"
              typeInput="password"
            />
            <CheckboxCondition textCondition="J'accepte les conditions d'" />
            {/* <a href="#">Externatic</a> */}
            <CheckboxCondition textCondition="Je veux créer ou télécharger mon cv maintenant !" />
            <ButtonMaxi textBtn="S'inscrire" />
          </div>
        </div>

        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>

        <div className="small-paragraphe-info">
          <p>
            Vous avez déjà un compte ? <span>Connectez-vous</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
