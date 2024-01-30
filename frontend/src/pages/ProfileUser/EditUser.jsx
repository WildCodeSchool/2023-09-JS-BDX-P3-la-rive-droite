import { useParams } from "react-router-dom";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
// Import de Context.
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "../Offer/add-offer.css";

function EditUser() {
  const globalContext = useGlobalContext();

  const { id } = useParams();

  const postEditUser = async () => {
    try {
      const infoUser = await globalContext.apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/edit-users/${id}`,
        globalContext.user,
        id
      );
      globalContext.setUser(infoUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditUser = () => {
    if (
      globalContext.user.title === "" ||
      globalContext.user.company === "" ||
      globalContext.user.type === "" ||
      globalContext.user.city === "" ||
      globalContext.user.mission === "" ||
      globalContext.user.search_profile === "" ||
      globalContext.user.work_place === "" ||
      globalContext.user.salary === "" ||
      globalContext.user.info === "" ||
      globalContext.user.email === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else {
      // console.log(globalContext.isAdmin);
      postEditUser();
      // console.log(user);
      globalContext.setMsgContent("L'offre à été ajouté avec");
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 4000);
    }
  };

  return (
    <div>
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Modifier votre profil</h1>
          <Input
            titleInput="Nom *"
            holderText={globalContext.user.lastname}
            fieldName="lastname"
            inputType="text"
            valueInput={globalContext.user}
            handleChange={(event) =>
              globalContext.handleChange(
                globalContext.setUser,
                "lastname",
                event
              )
            }
          />
          <Input
            titleInput="Prénom *"
            holderText={globalContext.user.firstname}
            fieldName="firstname"
            inputType="text"
            valueInput={globalContext.user}
            handleChange={(event) =>
              globalContext.handleChange(
                globalContext.setUser,
                "firstname",
                event
              )
            }
          />
          <Input
            titleInput="E-mail *"
            holderText={globalContext.user.email}
            fieldName="email"
            inputType="text"
            valueInput={globalContext.user}
            handleChange={(event) =>
              globalContext.handleChange(globalContext.setUser, "email", event)
            }
          />
          <Input
            titleInput="Mot de passe *"
            holderText="*************"
            fieldName="work_place"
            inputType="password"
            valueInput={globalContext.user.lastname}
            handleChange={(event) =>
              globalContext.handleChange(
                globalContext.setUser,
                "password",
                event
              )
            }
          />
          <Input
            titleInput="Numéro de téléphone *"
            holderText={globalContext.user.phone}
            fieldName="phone"
            inputType="text"
            valueInput={globalContext.user}
            handleChange={(event) =>
              globalContext.handleChange(globalContext.setUser, "phone", event)
            }
          />
          <Input
            titleInput="Adresse *"
            holderText={globalContext.user.address}
            fieldName="address"
            inputType="text"
            valueInput={globalContext.user}
            handleChange={(event) =>
              globalContext.handleChange(
                globalContext.setUser,
                "address",
                event
              )
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
        </div>
      </div>
      <div className="container-switch">
        <h2 className="label-champs"> Cochez vos compétences *</h2>
        <CompetenceSwitch
          textCompetence="HTML"
          valueInput={globalContext.user}
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "html")
          }
          fieldName="html"
        />
        <CompetenceSwitch
          textCompetence="CSS"
          valueInput={globalContext.user}
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "css")
          }
          fieldName="css"
        />
        <CompetenceSwitch
          textCompetence="JAVASCRIPT"
          valueInput={globalContext.user}
          fieldName="javascript"
          handleChange={() =>
            globalContext.handleCheckboxChange(
              globalContext.setUser,
              "javascript"
            )
          }
        />
        <CompetenceSwitch
          textCompetence="ANGULAR"
          valueInput={globalContext.user}
          fieldName="angular"
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "angular")
          }
        />
        <CompetenceSwitch
          textCompetence="REACT.JS"
          valueInput={globalContext.user}
          fieldName="react"
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "react")
          }
        />
        <CompetenceSwitch
          textCompetence="PHP"
          valueInput={globalContext.user}
          fieldName="php"
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "php")
          }
        />
        <CompetenceSwitch
          textCompetence="SYMPHONY"
          valueInput={globalContext.user}
          fieldName="symphony"
          handleChange={() =>
            globalContext.handleCheckboxChange(
              globalContext.setUser,
              "symphony"
            )
          }
        />
        <CompetenceSwitch
          textCompetence="GIT"
          valueInput={globalContext.user}
          fieldName="git"
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "git")
          }
        />
        <CompetenceSwitch
          textCompetence="GITHUB"
          valueInput={globalContext.user}
          fieldName="github"
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "github")
          }
        />
        <CompetenceSwitch
          textCompetence="TRELLO"
          valueInput={globalContext.user}
          fieldName="trello"
          handleChange={() =>
            globalContext.handleCheckboxChange(globalContext.setUser, "trello")
          }
        />
        <ButtonMaxi
          textBtn="Modifier l'utilisateur."
          clickFunc={handleEditUser}
        />
      </div>
    </div>
  );
}

export default EditUser;
