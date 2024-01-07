import { Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import AddSomething from "../../components/Add Something/AddSomething";
import Title from "../../components/Titles/Title";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useSignContext } from "../../contexts/SignContext";
import { useUserContext } from "../../contexts/UserContext";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import "../../components/Inputs/checkbox-conditions.css";

function SignIn() {
  const { handleChange, handleCheckboxChange } = useGlobalContext();
  const { editProfile, setEditProfile, setAddSkills } = useUserContext();

  const {
    errorMsg,
    succesMsg,
    msgContent,
    signIn,
    setSignIn,
    handleSubmitSignIn,
  } = useSignContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formulaire = event.target;
    const valeurs = {};

    // Itérer à travers tous les éléments du formulaire
    for (let i = 0; i < formulaire.elements.length; i += 1) {
      const element = formulaire.elements[i];
      // Vérifier si l'élément est un champ de formulaire avec une valeur
      if (element.hasAttribute("data-competence") && element.checked) {
        if (valeurs.competences === undefined) {
          valeurs.competences = [];
        }
        valeurs.competences.push(element.value);
      } else if (element.type !== "submit" && element.value) {
        valeurs[element.name] = element.value;
      }
    }
  };
  return (
    <>
      <HeaderLongTitle textTitle="Création de votre compte" />
      <div className="container-page container-general-login">
        <h1>S'inscrire</h1>
        <div className="champs-form">
          <form onSubmit={handleSubmit}>
            <Input
              titleInput="E-mail *"
              holderText="john.doe@externatic.fr"
              fieldName="email"
              typeInput="email"
              valueInput={signIn}
              handleChange={(event) => handleChange(setSignIn, "email", event)}
            />
            <Input
              titleInput="Mot de passe *"
              holderText="************"
              fieldName="password"
              typeInput="password"
              valueInput={signIn}
              handleChange={(event) =>
                handleChange(setSignIn, "password", event)
              }
            />
            <Input
              titleInput="Confirmer le mot de passe *"
              holderText="************"
              fieldName="password2"
              typeInput="password"
              valueInput={signIn}
              handleChange={(event) =>
                handleChange(setSignIn, "password2", event)
              }
            />
            <div className="container-page">
              <Title titleText="Vos coordonnées" />
              <Input
                titleInput="Nom *"
                holderText="Votre nom"
                fieldName="lastname"
                valueInput={editProfile}
                handleChange={(event) =>
                  handleChange(setEditProfile, "lastName", event)
                }
              />
              <Input
                titleInput="Prénom *"
                holderText="Votre prénom"
                fieldName="firstname"
                valueInput={editProfile}
                handleChange={(event) =>
                  handleChange(setEditProfile, "firstName", event)
                }
              />
              <Input
                titleInput="Téléphone *"
                holderText="Numéro de téléphone"
                fieldName="phone"
                typeInput="tel"
                valueInput={editProfile}
                handleChange={(event) =>
                  handleChange(setEditProfile, "phone", event)
                }
              />
              <Input
                titleInput="Addresse *"
                holderText="Adresse"
                fieldName="address"
                inputType="text"
                valueInput={editProfile}
                handleChange={(event) =>
                  handleChange(setEditProfile, "address", event)
                }
              />
              <div className="container-switch">
                <h2 className="label-champs"> Cochez vos compétences *</h2>
                <CompetenceSwitch
                  textCompetence="HTML"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "html")
                  }
                  fieldName="html"
                />
                <CompetenceSwitch
                  textCompetence="CSS"
                  handleChange={() => handleCheckboxChange(setAddSkills, "css")}
                  fieldName="css"
                />
                <CompetenceSwitch
                  textCompetence="JAVASCRIPT"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "javascript")
                  }
                />
                <CompetenceSwitch
                  textCompetence="ANGULAR"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "angular")
                  }
                />
                <CompetenceSwitch
                  textCompetence="REACT.JS"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "react")
                  }
                />
                <CompetenceSwitch
                  textCompetence="PHP"
                  handleChange={() => handleCheckboxChange(setAddSkills, "php")}
                />
                <CompetenceSwitch
                  textCompetence="SYMPHONY"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "symphony")
                  }
                />
                <CompetenceSwitch
                  textCompetence="GIT"
                  handleChange={() => handleCheckboxChange(setAddSkills, "git")}
                />
                <CompetenceSwitch
                  textCompetence="GITHUB"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "github")
                  }
                />
                <CompetenceSwitch
                  textCompetence="TRELLO"
                  handleChange={() =>
                    handleCheckboxChange(setAddSkills, "trello")
                  }
                />
                <AddSomething addDetail="Votre CV" />
              </div>
            </div>
            <CheckboxCondition
              textCondition="J'accepte les conditions d' *"
              fieldName="cguAgree"
            />
            {/* <a href="#">Externatic</a> */}
            <CheckboxCondition
              textCondition="Je veux créer ou télécharger mon cv maintenant !"
              fieldName="addCvNow"
            />
            <div>
              {errorMsg && <ErrorMsg message={msgContent} />}
              {succesMsg && <SuccesMsg message={msgContent} />}
            </div>
            <button type="submit">soumettre</button>
            <ButtonMaxi textBtn="S'inscrire" clickFunc={handleSubmitSignIn} />
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
