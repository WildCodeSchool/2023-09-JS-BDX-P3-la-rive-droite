import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

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
  const globalContext = useGlobalContext();
  const navigate = useNavigate();

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
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    }
    if (addCourse.dateBegin === "" || addCourse.dateEnd === "") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    }
    if (addCourse.level === "- - -") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez sélectionner un niveau valide");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    } else {
      try {
        const { data } = await globalContext.apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${
            globalContext.user.id
          }/cvs`
        );
        const cvId = data.id;
        addCourse.cvId = cvId;

        await globalContext.apiService.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/course/`,
          addCourse
        );

        setCourseSaved((prevData) => [...prevData, addCourse]);
        globalContext.setMsgContent("La formation a été ajoutée avec succès");
        globalContext.setSuccesMsg(true);
        setTimeout(() => {
          navigate("/profile");
          globalContext.setSuccesMsg(false);
        }, 2000);
      } catch (err) {
        console.error(err);
        globalContext.setErrorMsg(true);
        globalContext.setMsgContent("Formulaire incorrect");
        setTimeout(() => {
          globalContext.setErrorMsg(false);
        }, 2000);
      }
    }
  };
  useEffect(() => {}, [courseSaved]);

  const handleFormChange = (event) => {
    setAddCourse((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une formation</h1>
        <form onSubmit={handleAddCourse}>
          <Select
            handleChange={handleFormChange}
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
            handleChange={handleFormChange}
          />
          <Input
            titleInput="Nom de l'établissement *"
            holderText="Wild Code School"
            fieldName="name"
            inputType="text"
            valueInput={addCourse}
            handleChange={handleFormChange}
          />
          <Date
            fieldName="dateBegin"
            handleChange={handleFormChange}
            titleCalendar="Date de début *"
          />
          <Date
            fieldName="dateEnd"
            handleChange={handleFormChange}
            titleCalendar="Date de fin *"
          />
          <TextArea
            titleInput="Description de la formation *"
            holderText="Lorem ipsum dolor si amet"
            fieldName="description"
            inputType="text"
            valueInput={addCourse}
            handleChange={handleFormChange}
          />
          <div>
            {globalContext.errorMsg && (
              <ErrorMsg message={globalContext.msgContent} />
            )}
            {globalContext.succesMsg && (
              <SuccesMsg message={globalContext.msgContent} />
            )}
          </div>
          <button className="submit-btn-maxi" type="submit">
            Ajouter la formation
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFormation;
