import "./add-experience.css";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import Date from "../../components/Inputs/Date";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";

function AddExperience() {
  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une expérience</h1>

        <div className="container-input">
          <Input titleInput="Intitulé du poste *" holderText="Chef de projet" />
          <Input titleInput="Entreprise *" holderText="Inoxia" />
          <Input titleInput="Ville *" holderText="Bordeaux" />
          <Select titleSelect="Type de contrat *" valueSelect="CDI" />
          <div className="container-checkbox-experience">
            <CheckboxCondition textCondition="J'occupe ce poste actuellement" />
          </div>
          <Date titleCalendar="De :" />
          <Date titleCalendar="Jusqu'au :" />
          <TextArea
            titleInput="Description du poste *"
            holderText="Lorem ipsum dolor si amet"
          />
        </div>
        <ButtonMaxi textBtn="Ajouter l'expérience" />
      </div>
    </>
  );
}

export default AddExperience;
