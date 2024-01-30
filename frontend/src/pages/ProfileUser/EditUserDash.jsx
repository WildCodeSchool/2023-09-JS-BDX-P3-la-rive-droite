import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Select from "../../components/Inputs/Select";
import Input from "../../components/Inputs/Input";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
// Import de Context.
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "../Offer/add-offer.css";

function EditUserDash() {
  const globalContext = useGlobalContext();

  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const response = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`
      );
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const postEditUser = async () => {
    try {
      const infoUser = await globalContext.apiService.update(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/edit-users/${id}`,
        user,
        id
      );
      setUser(infoUser);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleEditUser = () => {
    if (
      user.title === "" ||
      user.company === "" ||
      user.type === "" ||
      user.city === "" ||
      user.mission === "" ||
      user.search_profile === "" ||
      user.work_place === "" ||
      user.salary === "" ||
      user.info === "" ||
      user.email === ""
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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Modifier votre profil</h1>
          <h2>ID User = {id}</h2>
          <Select
            titleSelect="Administrateur *"
            fieldName="is_admin"
            handleChange={(event) =>
              globalContext.handleChange(setUser, "is_admin", event)
            }
          >
            <option value={0}>False</option>
            <option value={1}>True</option>
          </Select>
          <Input
            titleInput="Nom *"
            holderText={user.lastname}
            fieldName="lastname"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "lastname", event)
            }
          />
          <Input
            titleInput="Prénom *"
            holderText={user.firstname}
            fieldName="firstname"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "firstname", event)
            }
          />
          <Input
            titleInput="E-mail *"
            holderText={user.email}
            fieldName="email"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "email", event)
            }
          />

          <Input
            titleInput="Numéro de téléphone *"
            holderText={user.phone}
            fieldName="phone"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "phone", event)
            }
          />
          <Input
            titleInput="Adresse *"
            holderText={user.address}
            fieldName="address"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "address", event)
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
          valueInput={user}
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "html")
          }
          fieldName="html"
        />
        <CompetenceSwitch
          textCompetence="CSS"
          valueInput={user}
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "css")
          }
          fieldName="css"
        />
        <CompetenceSwitch
          textCompetence="JAVASCRIPT"
          valueInput={user}
          fieldName="javascript"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "javascript")
          }
        />
        <CompetenceSwitch
          textCompetence="ANGULAR"
          valueInput={user}
          fieldName="angular"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "angular")
          }
        />
        <CompetenceSwitch
          textCompetence="REACT.JS"
          valueInput={user}
          fieldName="react"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "react")
          }
        />
        <CompetenceSwitch
          textCompetence="PHP"
          valueInput={user}
          fieldName="php"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "php")
          }
        />
        <CompetenceSwitch
          textCompetence="SYMPHONY"
          valueInput={user}
          fieldName="symphony"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "symphony")
          }
        />
        <CompetenceSwitch
          textCompetence="GIT"
          valueInput={user}
          fieldName="git"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "git")
          }
        />
        <CompetenceSwitch
          textCompetence="GITHUB"
          valueInput={user}
          fieldName="github"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "github")
          }
        />
        <CompetenceSwitch
          textCompetence="TRELLO"
          valueInput={user}
          fieldName="trello"
          handleChange={() =>
            globalContext.handleCheckboxChange(setUser, "trello")
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

export default EditUserDash;
