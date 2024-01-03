import "./add-experience.css";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import Date from "../../components/Inputs/Date";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import { useUserContext } from "../../contexts/UserContext";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";

function AddExperience() {
  const { handleAddXp, addXp, setAddXp } = useUserContext();
  const {
    errorMsg,
    succesMsg,
    msgContent,
    handleChange,
    handleCheckboxChange,
  } = useGlobalContext();

  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une expérience</h1>

        <div className="container-input">
          <Input
            titleInput="Intitulé du poste *"
            holderText="Chef de projet"
            fieldName="title"
            inputType="text"
            valueInput={addXp}
            handleChange={(event) => handleChange(setAddXp, "title", event)}
          />
          <Input
            titleInput="Entreprise *"
            holderText="Inoxia"
            fieldName="company"
            inputType="text"
            valueInput={addXp}
            handleChange={(event) => handleChange(setAddXp, "company", event)}
          />
          <Input
            titleInput="Ville *"
            holderText="Bordeaux"
            fieldName="city"
            inputType="text"
            valueInput={addXp}
            handleChange={(event) => handleChange(setAddXp, "city", event)}
          />
          <Select
            titleSelect="Type de contrat *"
            valueSelect="CDI"
            fieldName="type"
            handleChange={(event) => handleChange(setAddXp, "type", event)}
          >
            <option value="stage">Stage</option>
            <option value="alternance">Alternance</option>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
          </Select>
          <div className="container-checkbox-experience">
            <CheckboxCondition
              textCondition="J'occupe ce poste actuellement"
              fieldName="condition-poste"
              handleChange={(event) =>
                handleCheckboxChange(setAddXp, "isWorking", event)
              }
            />
          </div>
          <Date
            titleCalendar="De :"
            fieldName="dateBegin"
            handleChange={(event) => handleChange(setAddXp, "dateBegin", event)}
          />
          <Date
            titleCalendar="Jusqu'au :"
            fieldName="dateEnd"
            handleChange={(event) => handleChange(setAddXp, "dateEnd", event)}
          />
          <TextArea
            titleInput="Description du poste *"
            holderText="Lorem ipsum dolor si amet"
            fieldName="description"
            inputType="text"
            valueInput={addXp}
            handleChange={(event) =>
              handleChange(setAddXp, "description", event)
            }
          />
          <div>
            {errorMsg && <ErrorMsg message={msgContent} />}
            {succesMsg && <SuccesMsg message={msgContent} />}
          </div>
        </div>
        <ButtonMaxi textBtn="Ajouter l'expérience" clickFunc={handleAddXp} />
      </div>
    </>
  );
}

export default AddExperience;
