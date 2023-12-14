import React from "react";
import Input from "../../components/Inputs/Input";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import AddDetailsCV from "../../components/Add Something/AddSomething";

function CreateCV() {
  return (
    <div>
      <h1>Créer son CV</h1>
      <Input titleInput="Titre du CV *" holderText="Curuculum vitae" />
      <Input titleInput="Nom *" holderText="Doe" />
      <Input titleInput="Prénom *" holderText="John" />
      <Input titleInput="E-mail *" holderText="john.doe@externatic.fr" />
      <Input titleInput="Numéro *" holderText="06 00 00 00 00 00" />
      <Input titleInput="Adresse *" holderText="75 Rue Boétoile" />
      <AddDetailsCV objectToAdd="Expériences professionnelles" />
      <AddDetailsCV objectToAdd="Formations" />
      <ButtonMaxi textBtn="Enregistrer" />
    </div>
  );
}

export default CreateCV;
