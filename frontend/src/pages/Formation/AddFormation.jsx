import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Date from "../../components/Inputs/Date";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";

function AddFormation() {
  const {
    errorMsg,
    setErrorMsg,
    succesMsg,
    setSuccesMsg,
    msgContent,
    setMsgContent,
    handleChange,
    apiService,
    user,
  } = useGlobalContext();

  const [addCourse, setAddCourse] = useState({
    id: uuid(),
    level: "",
    domaine: "",
    name: "",
    dateBegin: "",
    dateEnd: "",
    description: "",
  });
  const [courseSaved, setCourseSaved] = useState([]);

  const handleAddCourse = async (event) => {
    event.preventDefault();
    if (
      addCourse.domaine === "" ||
      addCourse.name === "" ||
      addCourse.description === ""
      // addCourse.level === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }
    if (addCourse.dateBegin === "" || addCourse.dateEnd === "") {
      setErrorMsg(true);
      setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    }
    if (addCourse.level === "- - -") {
      setErrorMsg(true);
      setMsgContent("Veuillez sélectionner un niveau valide");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      try {
        const { data } = await apiService.get(
          `http://localhost:3310/api/users/${user.id}/cvs`
        );
        const cvId = data.id;

        // const personne = {
        //   prenom: "Marie",
        //   nom: "Delaire",
        // };
        // personne.prenom = "Mariiiiiiie";
        // console.log(personne);

        // peut etre que ca fait un bug, chépa tro
        addCourse.cvId = cvId;

        await apiService.post(`http://localhost:3310/api/course/`, addCourse);

        setCourseSaved((prevData) => [...prevData, addCourse]);
        setMsgContent("La formation a été ajoutée avec succès");
        setSuccesMsg(true);
        setTimeout(() => {
          setSuccesMsg(false);
        }, 4000);
      } catch (err) {
        console.error(err);
        setErrorMsg(true);
        setMsgContent("Formulaire incorrect");
        setTimeout(() => {
          setErrorMsg(false);
        }, 4000);
      }
    }
  };
  useEffect(() => {}, [courseSaved]);

  return (
    <div>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une formation</h1>
        <form onSubmit={handleAddCourse}>
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
            handleChange={(event) =>
              handleChange(setAddCourse, "domaine", event)
            }
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
            handleChange={(event) =>
              handleChange(setAddCourse, "dateEnd", event)
            }
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
          <button type="submit">soumettre</button>
        </form>
        <ButtonMaxi
          textBtn="Ajouter une formation"
          clickFunc={handleAddCourse}
        />
      </div>
    </div>
  );
}

export default AddFormation;
