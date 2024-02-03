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

function EditUser() {
  const {
    apiService,
    errorMsg,
    setErrorMsg,
    succesMsg,
    setSuccesMsg,
    msgContent,
    setMsgContent,
    handleChange,
    handleCheckboxChanged,
    isAdmin,
  } = useGlobalContext();
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`
        );
        if (data) {
          // console.log(data);
          setUser(data);
        } else {
          console.error("Echec de la récupération des données.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);

  const postEditUser = async () => {
    try {
      const infoUser = await apiService.update(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/edit/${user.id}`,
        user
      );
      setUser(infoUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditUser = () => {
    if (
      user.lastName === "" ||
      user.firstName === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.address === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      postEditUser();
      // console.log(user);
      setMsgContent("Votre profil a été modifié avec ");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);
    }
  };

  return (
    <div>
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Modifier votre profil</h1>

          {isAdmin ? (
            <div>
              <h2>ID User = {user.id}</h2>
              <Select
                titleSelect="Administrateur *"
                fieldName="is_admin"
                handleChange={(event) =>
                  handleChange(setUser, "is_admin", event)
                }
              >
                <option value={0}>False</option>
                <option value={1}>True</option>
              </Select>
            </div>
          ) : null}

          <Input
            titleInput="Nom *"
            holderText={user.lastname}
            fieldName="lastname"
            inputType="text"
            valueInput={user.lastname}
            handleChange={(event) => handleChange(setUser, "lastname", event)}
          />
          <Input
            titleInput="Prénom *"
            holderText={user.firstname}
            fieldName="firstname"
            inputType="text"
            valueInput={user.firstname}
            handleChange={(event) => handleChange(setUser, "firstname", event)}
          />
          <Input
            titleInput="E-mail *"
            holderText={user.email}
            fieldName="email"
            inputType="text"
            valueInput={user.email}
            handleChange={(event) => handleChange(setUser, "email", event)}
          />
          <Input
            titleInput="Numéro de téléphone *"
            holderText={user.phone}
            fieldName="phone"
            inputType="text"
            valueInput={user.phone}
            handleChange={(event) => handleChange(setUser, "phone", event)}
          />
          <Input
            titleInput="Adresse *"
            holderText={user.address}
            fieldName="address"
            inputType="text"
            valueInput={user.address}
            handleChange={(event) => handleChange(setUser, "address", event)}
          />
        </div>
      </div>
      <div className="container-switch">
        <h2 className="label-champs">Cochez vos compétences *</h2>
        <CompetenceSwitch
          textCompetence="HTML"
          fieldName="html"
          isChecked={user.competences?.find((c) => c.name === "html")}
          handleChange={(event) => handleCheckboxChanged(user, "html", event)}
        />

        <CompetenceSwitch
          textCompetence="CSS"
          isChecked={user.competences?.find((c) => c.name === "css")}
          fieldName="css"
          handleChange={(event) => handleCheckboxChanged(setUser, "css", event)}
        />
        <CompetenceSwitch
          textCompetence="JAVASCRIPT"
          fieldName="javascript"
          isChecked={user.competences?.find((c) => c.name === "javascript")}
          handleChange={(event) =>
            handleCheckboxChanged(user, "javascript", event)
          }
        />
        <CompetenceSwitch
          textCompetence="ANGULAR"
          fieldName="angular"
          isChecked={user.competences?.find((c) => c.name === "angular")}
          handleChange={(event) =>
            handleCheckboxChanged(user, "angular", event)
          }
        />
        <CompetenceSwitch
          textCompetence="REACT.JS"
          fieldName="react"
          isChecked={user.competences?.find((c) => c.name === "react")}
          handleChange={(event) => handleCheckboxChanged(user, "react", event)}
        />
        <CompetenceSwitch
          textCompetence="PHP"
          fieldName="php"
          isChecked={user.competences?.find((c) => c.name === "php")}
          handleChange={(event) => handleCheckboxChanged(user, "php", event)}
        />
        <CompetenceSwitch
          textCompetence="SYMPHONY"
          fieldName="symphony"
          isChecked={user.competences?.find((c) => c.name === "symphony")}
          handleChange={(event) =>
            handleCheckboxChanged(user, "symphony", event)
          }
        />
        <CompetenceSwitch
          textCompetence="GIT"
          fieldName="git"
          isChecked={user.competences?.find((c) => c.name === "git")}
          handleChange={(event) => handleCheckboxChanged(user, "git", event)}
        />
        <CompetenceSwitch
          textCompetence="GITHUB"
          fieldName="github"
          isChecked={user.competences?.find((c) => c.name === "github")}
          handleChange={(event) => handleCheckboxChanged(user, "github", event)}
        />
        <CompetenceSwitch
          textCompetence="TRELLO"
          fieldName="trello"
          isChecked={user.competences?.find((c) => c.name === "trello")}
          handleChange={(event) => handleCheckboxChanged(user, "trello", event)}
        />
      </div>
      <div>
        {errorMsg && <ErrorMsg message={msgContent} />}
        {succesMsg && <SuccesMsg message={msgContent} />}
      </div>
      <ButtonMaxi
        textBtn="Modifier l'utilisateur."
        clickFunc={handleEditUser}
      />
    </div>
  );
}

export default EditUser;
