import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Date from "../../components/Inputs/Date";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";

function AddFormation() {
  return (
    <div>
      <h1>Ajouter une formation</h1>
      <Select titleSelect="Niveau d'étude *" valueSelect="Master 2" />
      <Select titleSelect="Domaine *" />
      <Input
        titleInput="Nom de l'établissement *"
        holderText="Sup de pub"
        inputType="text"
      />
      <Date titleCalendar="Date de début *" />
      <Date titleCalendar="Date de fin *" />
      <Input inputType="textarea" />
      <ButtonMaxi textBtn="Ajouter une formation" />
    </div>
  );
}

export default AddFormation;
