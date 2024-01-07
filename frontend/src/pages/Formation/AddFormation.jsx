import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Date from "../../components/Inputs/Date";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import { useUserContext } from "../../contexts/UserContext";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";

function AddFormation() {
  const { handleAddCourse, addCourse, setAddCourse } = useUserContext();
  const { errorMsg, succesMsg, msgContent, handleChange } = useGlobalContext();

  return (
    <div>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une formation</h1>
        <Select
          handleChange={(event) => handleChange(setAddCourse, "level", event)}
          fieldName="level"
          titleSelect="Niveau d'étude *"
        >
          <option value="Baccalaureat">Baccalauréat</option>
          <option value="Licence">Licence</option>
          <option value="Master 1">Master 1</option>
          <option value="Master 2">Master 2</option>
        </Select>
        <Input
          titleInput="Domaine *"
          holderText="Javascript/React"
          fieldName="domaine"
          inputType="text"
          valueInput={addCourse}
          handleChange={(event) => handleChange(setAddCourse, "domaine", event)}
        />
        <Input
          titleInput="Nom de l'établissement *"
          holderText="Wild Code School"
          fieldName="name"
          inputType="text"
          valueInput={addCourse}
          handleChange={(event) => handleChange(setAddCourse, "name", event)}
        />
        <Date
          fieldName="dateBegin"
          handleChange={(event) =>
            handleChange(setAddCourse, "dateBegin", event)
          }
          titleCalendar="Date de début *"
        />
        <Date
          fieldName="dateEnd"
          handleChange={(event) => handleChange(setAddCourse, "dateEnd", event)}
          titleCalendar="Date de fin *"
        />
        <TextArea
          titleInput="Description de la formation *"
          holderText="Lorem ipsum dolor si amet"
          fieldName="description"
          inputType="text"
          valueInput={addCourse}
          handleChange={(event) =>
            handleChange(setAddCourse, "description", event)
          }
        />
        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>
        <ButtonMaxi
          textBtn="Ajouter une formation"
          clickFunc={handleAddCourse}
        />
      </div>
    </div>
  );
}

export default AddFormation;
