import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Inputs/Input";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
import HeaderLongTitle from "../../components/Headers/HeaderLongTitle";
// import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import AddSomething from "../../components/Add Something/AddSomething";
import Title from "../../components/Titles/Title";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useSignContext } from "../../contexts/SignContext";
import "./login-signin.css";
import "../../components/Inputs/input.css";
import "../../components/Boutons/button-maxi.css";
import "../../components/Inputs/checkbox-conditions.css";

function SignIn() {
  const {
    errorMsg,
    setErrorMsg,
    succesMsg,
    setSuccesMsg,
    msgContent,
    setMsgContent,
    handleChange,
    handleCheckboxChange,
    navigate,
    emailRegex,
    passwordRegex,
  } = useGlobalContext();

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
      setErrorMsg(true);
      setMsgContent("Champs non remplis");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (!emailRegex.test(signIn.email)) {
      setErrorMsg(true);
      setMsgContent("L'adresse mail n'est pas correcte");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (signIn.password.length < 8) {
      setErrorMsg(true);
      setMsgContent("Le mot de passe n'est pas assez long");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (!passwordRegex.test(signIn.password)) {
      setErrorMsg(true);
      setMsgContent(
        "Le mot de passe doit contenir au moins : 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spéciale(@$!%*?&)"
      );
      setTimeout(() => {
        setErrorMsg(false);
      }, 6000);
    } else if (signIn.password !== signIn.password2) {
      setErrorMsg(true);
      setMsgContent("Les mots de passes ne sont pas identiques");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (signIn.cguAgree === false) {
      setErrorMsg(true);
      setMsgContent("Vous n'avez pas validé les conditions générales");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      setSuccesMsg(true);
      setMsgContent("Compte créé avec");
      setTimeout(() => {
        setSuccesMsg(false);
      }, 2000);

      axios.post("http://localhost:3310/api/users", signIn).then((response) => {
        const userId = response.data.rows.insertId;
        axios
          .post(`http://localhost:3310/api/user_competence/${userId}`, {
            ...signIn,
            html: skills.html || false,
            css: skills.css || false,
            javascript: skills.javascript || false,
            angular: skills.angular || false,
            react: skills.react || false,
            php: skills.php || false,
            symphony: skills.symphony || false,
            git: skills.git || false,
            github: skills.github || false,
            trello: skills.trello || false,
          })
          .then(() => {
            setSignIn({
              email: "",
              password: "",
              password2: "",
              lastname: "",
              firstname: "",
              phone: "",
              address: "",
            });

            if (signIn.addCvNow === true) {
              setTimeout(() => {
                navigate("/edit-profile/cv");
              }, 2000);
            } else {
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            }
          })
          .catch((error) => {
            console.error("Error during Axios request:", error);
            if (error.response) {
              console.error("Response data:", error.response.data);
              console.error("Response status:", error.response.status);
              console.error("Response headers:", error.response.headers);
            } else if (error.request) {
              console.error("No response received:", error.request);
            } else {
              console.error("Error message:", error.message);
            }
          });
      });
    }
  };

  return (
    <>
      <HeaderLongTitle textTitle="Création de votre compte" />
      <div className="container-page container-general-login">
        <h1>S'inscrire</h1>
        <div className="champs-form">
          <form>
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
            <div className="container-coordonnees">
              <Title titleText="Vos coordonnées" />
              <Input
                titleInput="Nom *"
                holderText="Votre nom"
                fieldName="lastname"
                valueInput={signIn}
                handleChange={(event) =>
                  handleChange(setSignIn, "lastname", event)
                }
              />
              <Input
                titleInput="Prénom *"
                holderText="Votre prénom"
                fieldName="firstname"
                valueInput={signIn}
                handleChange={(event) =>
                  handleChange(setSignIn, "firstname", event)
                }
              />
              <Input
                titleInput="Téléphone *"
                holderText="Numéro de téléphone"
                fieldName="phone"
                typeInput="tel"
                valueInput={signIn}
                handleChange={(event) =>
                  handleChange(setSignIn, "phone", event)
                }
              />
              <Input
                titleInput="Addresse *"
                holderText="Adresse"
                fieldName="address"
                inputType="text"
                valueInput={signIn}
                handleChange={(event) =>
                  handleChange(setSignIn, "address", event)
                }
              />
              <div className="container-switch">
                <h2 className="label-champs"> Cochez vos compétences *</h2>
                <CompetenceSwitch
                  textCompetence="HTML"
                  valueInput={skills}
                  handleChange={() => handleCheckboxChange(setSkills, "html")}
                  fieldName="html"
                />
                <CompetenceSwitch
                  textCompetence="CSS"
                  valueInput={skills}
                  handleChange={() => handleCheckboxChange(setSkills, "css")}
                  fieldName="css"
                />
                <CompetenceSwitch
                  textCompetence="JAVASCRIPT"
                  valueInput={skills}
                  fieldName="javascript"
                  handleChange={() =>
                    handleCheckboxChange(setSkills, "javascript")
                  }
                />
                <CompetenceSwitch
                  textCompetence="ANGULAR"
                  valueInput={skills}
                  fieldName="angular"
                  handleChange={() =>
                    handleCheckboxChange(setSkills, "angular")
                  }
                />
                <CompetenceSwitch
                  textCompetence="REACT.JS"
                  valueInput={skills}
                  fieldName="react"
                  handleChange={() => handleCheckboxChange(setSkills, "react")}
                />
                <CompetenceSwitch
                  textCompetence="PHP"
                  valueInput={skills}
                  fieldName="php"
                  handleChange={() => handleCheckboxChange(setSkills, "php")}
                />
                <CompetenceSwitch
                  textCompetence="SYMPHONY"
                  valueInput={skills}
                  fieldName="symphony"
                  handleChange={() =>
                    handleCheckboxChange(setSkills, "symphony")
                  }
                />
                <CompetenceSwitch
                  textCompetence="GIT"
                  valueInput={skills}
                  fieldName="git"
                  handleChange={() => handleCheckboxChange(setSkills, "git")}
                />
                <CompetenceSwitch
                  textCompetence="GITHUB"
                  valueInput={skills}
                  fieldName="github"
                  handleChange={() => handleCheckboxChange(setSkills, "github")}
                />
                <CompetenceSwitch
                  textCompetence="TRELLO"
                  valueInput={skills}
                  fieldName="trello"
                  handleChange={() => handleCheckboxChange(setSkills, "trello")}
                />
                <AddSomething addDetail="Votre CV" />
              </div>
            </div>
            <CheckboxCondition
              textCondition="J'accepte les conditions générales d'Externatic"
              valueInput={signIn}
              fieldName="cguAgree"
              handleChange={() => handleCheckboxChange(setSignIn, "cguAgree")}
            />
            {/* <a href="#">Externatic</a> */}
            <CheckboxCondition
              textCondition="Je veux créer ou télécharger mon cv maintenant !"
              valueInput={signIn}
              fieldName="addCvNow"
              handleChange={() => handleCheckboxChange(setSignIn, "addCvNow")}
            />
            <div>
              {errorMsg && <ErrorMsg message={msgContent} />}
              {succesMsg && <SuccesMsg message={msgContent} />}
            </div>
            <button type="button" onClick={handleSubmitSignIn}>
              soumettre
            </button>
            {/* <ButtonMaxi textBtn="S'inscrire" clickFunc={handleSubmitSignIn} /> */}
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
