import React from "react";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import AddDetailsCV from "../../components/Add Something/AddSomething";
import HeaderCourt from "../../components/Headers/HeaderCourt";
// Import de context.
import { useUserContext } from "../../contexts/UserContext";
import { useGlobalContext } from "../../contexts/GlobalContext";
// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";

function CreateCV() {
  const { addCv, setAddCv, handleAddCv } = useUserContext();
  const { errorMsg, succesMsg, msgContent, handleChange } = useGlobalContext();

  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Créer son CV</h1>
        <Input
          titleInput="Titre du CV *"
          holderText="Curuculum vitae"
          fieldName="title"
          valueInput={addCv}
          handleChange={(event) => handleChange(setAddCv, "title", event)}
        />
        <Input
          titleInput="Nom *"
          holderText="Doe"
          fieldName="lastName"
          valueInput={addCv}
          handleChange={(event) => handleChange(setAddCv, "lastName", event)}
        />
        <Input
          titleInput="Prénom *"
          holderText="John"
          fieldName="firstName"
          valueInput={addCv}
          handleChange={(event) => handleChange(setAddCv, "firstName", event)}
        />
        <Input
          titleInput="E-mail *"
          holderText="john.doe@externatic.fr"
          fieldName="email"
          valueInput={addCv}
          handleChange={(event) => handleChange(setAddCv, "email", event)}
        />
        <Input
          titleInput="Numéro *"
          holderText="06 00 00 00 00 00"
          fieldName="number"
          valueInput={addCv}
          handleChange={(event) => handleChange(setAddCv, "number", event)}
        />
        <Input
          titleInput="Adresse *"
          holderText="75 Rue Boétoile"
          fieldName="adress"
          valueInput={addCv}
          handleChange={(event) => handleChange(setAddCv, "adress", event)}
        />
        <AddDetailsCV
          addDetail="Expériences professionnelles"
          url="/edit-profile/experience"
        />
        <AddDetailsCV addDetail="Formations" url="/edit-profile/formation" />
        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>
        <ButtonMaxi textBtn="Enregistrer" clickFunc={handleAddCv} />
      </div>
    </>
  );
}

export default CreateCV;
