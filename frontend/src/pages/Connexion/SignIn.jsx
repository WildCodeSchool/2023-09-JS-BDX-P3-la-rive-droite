import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Inputs/Input";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import Title from "../../components/Titles/Title";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useSignContext } from "../../contexts/SignContext";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import "../../components/Inputs/checkbox-conditions.css";

function SignIn() {
  const globalContext = useGlobalContext();

  const { signIn, setSignIn, skills, setSkills } = useSignContext();

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    if (
      signIn.email === "" ||
      signIn.password === "" ||
      signIn.password2 === "" ||
      signIn.lastname === "" ||
      signIn.firstname === "" ||
      signIn.phone === "" ||
      signIn.address === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Champs non remplis");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else if (!globalContext.emailRegex.test(signIn.email)) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("L'adresse mail n'est pas correcte");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else if (signIn.password.length < 8) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Le mot de passe n'est pas assez long");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else if (!globalContext.passwordRegex.test(signIn.password)) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent(
        "Le mot de passe doit contenir au moins : 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spéciale(@$!%*?&)"
      );
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 6000);
    } else if (signIn.password !== signIn.password2) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Les mots de passes ne sont pas identiques");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else if (signIn.cguAgree === false) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent(
        "Vous n'avez pas validé les conditions générales"
      );
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else {
      globalContext.setSuccesMsg(true);
      globalContext.setMsgContent("Compte créé avec");
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 2000);
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        ...signIn,
        ...skills,
      });
      if (signIn.addCvNow === true) {
        setTimeout(() => {
          globalContext.navigate("/edit-profile/cv");
        }, 2000);
      } else {
        setTimeout(() => {
          globalContext.navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <>
      <HeaderLongTitle textTitle="Création de votre compte" />
      <div className="container-page with-rounded-border">
        <h1>S'inscrire</h1>
        <div className="champs-form">
          <form>
            <Input
              titleInput="E-mail *"
              holderText="john.doe@externatic.fr"
              fieldName="email"
              typeInput="email"
              valueInput={signIn}
              handleChange={(event) =>
                globalContext.handleChange(setSignIn, "email", event)
              }
            />
            <Input
              titleInput="Mot de passe *"
              holderText="************"
              fieldName="password"
              typeInput="password"
              valueInput={signIn}
              handleChange={(event) =>
                globalContext.handleChange(setSignIn, "password", event)
              }
            />
            <Input
              titleInput="Confirmer le mot de passe *"
              holderText="************"
              fieldName="password2"
              typeInput="password"
              valueInput={signIn}
              handleChange={(event) =>
                globalContext.handleChange(setSignIn, "password2", event)
              }
            />
            <div className="container-coordonnees">
              <Title titleText="Vos coordonnées" />
              <Input
                titleInput="Nom *"
                holderText="Votre nom"
                fieldName="lastname"
                valueInput={signIn}
                handleChange={(event) =>
                  globalContext.handleChange(setSignIn, "lastname", event)
                }
              />
              <Input
                titleInput="Prénom *"
                holderText="Votre prénom"
                fieldName="firstname"
                valueInput={signIn}
                handleChange={(event) =>
                  globalContext.handleChange(setSignIn, "firstname", event)
                }
              />
              <Input
                titleInput="Téléphone *"
                holderText="Numéro de téléphone"
                fieldName="phone"
                typeInput="tel"
                valueInput={signIn}
                handleChange={(event) =>
                  globalContext.handleChange(setSignIn, "phone", event)
                }
              />
              <Input
                titleInput="Addresse *"
                holderText="Adresse"
                fieldName="address"
                inputType="text"
                valueInput={signIn}
                handleChange={(event) =>
                  globalContext.handleChange(setSignIn, "address", event)
                }
              />
              <div className="container-switch">
                <h2 className="label-champs"> Cochez vos compétences *</h2>
                <CompetenceSwitch
                  textCompetence="HTML"
                  valueInput={skills}
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "html")
                  }
                  fieldName="html"
                />
                <CompetenceSwitch
                  textCompetence="CSS"
                  valueInput={skills}
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "css")
                  }
                  fieldName="css"
                />
                <CompetenceSwitch
                  textCompetence="JAVASCRIPT"
                  valueInput={skills}
                  fieldName="javascript"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "javascript")
                  }
                />
                <CompetenceSwitch
                  textCompetence="ANGULAR"
                  valueInput={skills}
                  fieldName="angular"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "angular")
                  }
                />
                <CompetenceSwitch
                  textCompetence="REACT.JS"
                  valueInput={skills}
                  fieldName="react"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "react")
                  }
                />
                <CompetenceSwitch
                  textCompetence="PHP"
                  valueInput={skills}
                  fieldName="php"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "php")
                  }
                />
                <CompetenceSwitch
                  textCompetence="SYMPHONY"
                  valueInput={skills}
                  fieldName="symphony"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "symphony")
                  }
                />
                <CompetenceSwitch
                  textCompetence="GIT"
                  valueInput={skills}
                  fieldName="git"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "git")
                  }
                />
                <CompetenceSwitch
                  textCompetence="GITHUB"
                  valueInput={skills}
                  fieldName="github"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "github")
                  }
                />
                <CompetenceSwitch
                  textCompetence="TRELLO"
                  valueInput={skills}
                  fieldName="trello"
                  handleChange={() =>
                    globalContext.handleCheckboxChange(setSkills, "trello")
                  }
                />
              </div>
            </div>
            <CheckboxCondition
              textCondition="J'accepte les conditions générales d'Externatic"
              valueInput={signIn}
              fieldName="cguAgree"
              handleChange={() =>
                globalContext.handleCheckboxChange(setSignIn, "cguAgree")
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
            <button
              className="submit-btn-maxi"
              type="button"
              onClick={handleSubmitSignIn}
            >
              S'inscrire
            </button>
          </form>
        </div>
        <div className="small-paragraphe-info">
          <p>
            Vous avez déjà un compte ?
            <Link to="/login">
              <span>Connectez-vous</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default SignIn;
