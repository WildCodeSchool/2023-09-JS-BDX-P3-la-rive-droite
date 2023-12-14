import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Date from "../../components/Inputs/Date";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";

function Offer() {
  return (
    <div>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une offre</h1>
        <Select titleSelect="Niveau d'étude *" valueSelect="Master 2" />
        <Select titleSelect="Domaine *" />
        <Input
          titleInput="Nom de l'établissement *"
          holderText="Sup de pub"
          inputType="text"
        />
        <Date titleCalendar="Date de début *" />
        <Date titleCalendar="Date de fin *" />
        <TextArea
          titleInput="Description de la formation *"
          holderText="Lorem ipsum dolor si amet"
        />
        <ButtonMaxi textBtn="Ajouter une formation" />
      </div>
    </div>
  );
}

export default Offer;
