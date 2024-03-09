import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./add-experience.css";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import Date from "../../components/Inputs/Date";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";

function AddExperience() {
  const globalContext = useGlobalContext();
  const navigate = useNavigate();

  const [newExperience, setNewExperience] = useState({
    id: uuid(),
    title: "",
    company: "",
    city: "",
    type: "",
    isWorking: false,
    dateBegin: "",
    dateEnd: null,
    description: "",
    cvId: null,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (
      newExperience.title === "" ||
      newExperience.company === "" ||
      newExperience.type === "" ||
      newExperience.city === "" ||
      newExperience.description === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
      return;
    }

    if (newExperience.dateBegin === "") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner la date de début");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
      return;
    }

    if (!newExperience.isWorking && newExperience.dateEnd === "") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner la date de fin");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
      return;
    }

    try {
      if (newExperience.isWorking) {
        newExperience.dateEnd = "1970-01-01";
      }
      // On va chercher l'id du cv de l'utilisateur
      const { data } = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${
          globalContext.user.id
        }/cvs`
      );
      const cvId = data.id;

      newExperience.cvId = cvId;

      await globalContext.apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/experience/`,
        newExperience
      );

      globalContext.setMsgContent("L'expérience a été ajoutée avec");
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
        navigate("/profile");
      }, 2000);
    } catch (err) {
      console.error(err);
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Formulaire incorrect");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    }
  };

  const handleFormChange = (event) => {
    setNewExperience((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une expérience</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="container-input">
            <Input
              titleInput="Intitulé du poste *"
              holderText="Chef de projet"
              fieldName="title"
              inputType="text"
              valueInput={newExperience}
              handleChange={handleFormChange}
            />
            <Input
              titleInput="Entreprise *"
              holderText="Inoxia"
              fieldName="company"
              inputType="text"
              valueInput={newExperience}
              handleChange={handleFormChange}
            />
            <Input
              titleInput="Ville *"
              holderText="Bordeaux"
              fieldName="city"
              inputType="text"
              valueInput={newExperience}
              handleChange={handleFormChange}
            />
            <Select
              titleSelect="Type de contrat *"
              valueSelect="CDI"
              fieldName="type"
              handleChange={handleFormChange}
            >
              <option value="stage">Stage</option>
              <option value="alternance">Alternance</option>
              <option value="CDD">CDD</option>
              <option value="CDI">CDI</option>
            </Select>
            <div className="container-checkbox-experience">
              <CheckboxCondition
                textCondition="J'occupe ce poste actuellement"
                fieldName="isWorking"
                handleChange={() => {
                  setNewExperience((prevData) => {
                    const newValue = !prevData.isWorking;
                    return {
                      ...prevData,
                      isWorking: newValue,
                    };
                  });
                }}
                checked={newExperience.isWorking}
              />
            </div>
            <Date
              titleCalendar="De :"
              fieldName="dateBegin"
              handleChange={handleFormChange}
            />
            {!newExperience.isWorking && (
              <Date
                titleCalendar="Jusqu'au :"
                fieldName="dateEnd"
                handleChange={handleFormChange}
              />
            )}

            <TextArea
              titleInput="Description du poste *"
              holderText="Lorem ipsum dolor si amet"
              fieldName="description"
              inputType="text"
              valueInput={newExperience}
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
          </div>
          <button className="submit-btn-maxi" type="submit">
            Ajouter l'expérience
          </button>
        </form>
      </div>
    </>
  );
}

export default AddExperience;
