import { useState, useEffect } from "react";
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

  const [addXp, setAddXp] = useState({
    id: uuid(),
    title: "",
    company: "",
    city: "",
    type: "",
    isWorking: false,
    dateBegin: "",
    dateEnd: null,
    description: null,
    cvId: null,
  });

  const [xpSaved, setXpSaved] = useState([]);
  const handleAddXp = async (event) => {
    event.preventDefault();
    if (
      addXp.title === "" ||
      addXp.company === "" ||
      addXp.type === "" ||
      addXp.city === "" ||
      addXp.description === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    } else if (addXp.isWorking === false && addXp.dateBegin === "") {
      addXp.dateBegin = "1970-01-01";

      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
    } else if (addXp.isWorking === true && addXp.dateBegin === "") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner les dates");
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

        addXp.cvId = cvId;

        await globalContext.apiService.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/experience/`,
          addXp
        );

        setXpSaved((prevData) => [...prevData, addXp]);
        globalContext.setMsgContent("L'expérience a été ajoutée avec");
        globalContext.setSuccesMsg(true);
        setTimeout(() => {
          globalContext.setSuccesMsg(false);
          globalContext.navigate("/profile");
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
  useEffect(() => {}, [xpSaved]);
  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une expérience</h1>
        <form onSubmit={handleAddXp}>
          <div className="container-input">
            <Input
              titleInput="Intitulé du poste *"
              holderText="Chef de projet"
              fieldName="title"
              inputType="text"
              valueInput={addXp}
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "title", event)
              }
            />
            <Input
              titleInput="Entreprise *"
              holderText="Inoxia"
              fieldName="company"
              inputType="text"
              valueInput={addXp}
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "company", event)
              }
            />
            <Input
              titleInput="Ville *"
              holderText="Bordeaux"
              fieldName="city"
              inputType="text"
              valueInput={addXp}
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "city", event)
              }
            />
            <Select
              titleSelect="Type de contrat *"
              valueSelect="CDI"
              fieldName="type"
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "type", event)
              }
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
                  globalContext.handleCheckboxChange(
                    setAddXp,
                    "isWorking",
                    event
                  )
                }
              />
            </div>
            <Date
              titleCalendar="De :"
              fieldName="dateBegin"
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "dateBegin", event)
              }
            />
            <Date
              titleCalendar="Jusqu'au :"
              fieldName="dateEnd"
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "dateEnd", event)
              }
            />
            <TextArea
              titleInput="Description du poste *"
              holderText="Lorem ipsum dolor si amet"
              fieldName="description"
              inputType="text"
              valueInput={addXp}
              handleChange={(event) =>
                globalContext.handleChange(setAddXp, "description", event)
              }
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
