import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./add-experience.css";
// import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
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
  const {
    errorMsg,
    setErrorMsg,
    succesMsg,
    setSuccesMsg,
    msgContent,
    setMsgContent,
    handleChange,
    handleCheckboxChange,
    apiService,
    user,
    navigate,
  } = useGlobalContext();

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
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (addXp.isWorking === false && addXp.dateBegin === "") {
      addXp.dateBegin = "1970-01-01";

      // Affichage d'un message d'erreur
      setErrorMsg(true);
      setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else if (addXp.isWorking === true && addXp.dateBegin === "") {
      setErrorMsg(true);
      setMsgContent("Veuillez renseigner les dates");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      try {
        // ici on récupère l'id du cv, et le back fait en sorte
        // que si l'utilisateur n'a pas de cv, il en crée un
        const { data } = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}/cvs`
        );
        const cvId = data.id;

        // const personne = {
        //   prenom: "Marie",
        //   nom: "Delaire",
        // };
        // personne.prenom = "Mariiiiiiie";
        // console.log(personne);

        // peut etre que ca fait un bug, chépa tro
        addXp.cvId = cvId;

        await apiService.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/experience/`,
          addXp
        );

        setXpSaved((prevData) => [...prevData, addXp]);
        setMsgContent("L'expérience a été ajoutée avec");
        setSuccesMsg(true);
        setTimeout(() => {
          setSuccesMsg(false);
          navigate("/edit-profile");
        }, 3000);
        // saveItemInLS("Experience", xpSaved);
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
              handleChange={(event) =>
                handleChange(setAddXp, "dateBegin", event)
              }
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
          <button type="submit">soumettre</button>
        </form>

        {/* <ButtonMaxi textBtn="Ajouter l'expérience" clickFunc={handleAddXp} /> */}
      </div>
    </>
  );
}

export default AddExperience;
