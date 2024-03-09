import { useState, useEffect } from "react";
import "./add-experience.css";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import DateComponent from "../../components/Inputs/Date";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";

function EditExperience() {
  const globalContext = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [experience, setExperience] = useState({
    title: "",
    company: "",
    city: "",
    type: "",
    isWorking: false,
    dateBegin: "",
    dateEnd: "",
    description: "",
    cvId: null,
  });

  useEffect(() => {
    const getExperience = async () => {
      try {
        const { data } = await globalContext.apiService.get(
          `http://localhost:3310/api/experience/${id}`
        );

        // on reçoit les dates au format dd-MM-yyyy, on veut yyyy-MM-dd
        const dateBeginObject = new Date(data.date_begin);
        const dateEndObject = new Date(data.date_end);

        const formattedDateBegin = format(dateBeginObject, "yyyy-MM-dd");
        const formattedDateEnd = format(dateEndObject, "yyyy-MM-dd");

        data.dateBegin = formattedDateBegin;
        data.dateEnd = formattedDateEnd;

        data.isWorking = data.is_working;

        setExperience(data);
      } catch (err) {
        console.error(err);
        navigate("/profile");
      }
    };
    getExperience();
  }, []);

  useEffect(() => {
    if (experience.isWorking) {
      experience.dateEnd = "";
    }
  }, [experience]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (
      experience.title === "" ||
      experience.company === "" ||
      experience.type === "" ||
      experience.city === "" ||
      experience.description === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
      return;
    }

    if (experience.dateBegin === "") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner la date de début");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
      return;
    }

    if (!experience.isWorking && experience.dateEnd === "") {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez renseigner la date de fin");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 2000);
      return;
    }

    try {
      if (experience.isWorking) {
        experience.dateEnd = "1970-01-01";
      }
      // ici on récupère l'id du cv, et le back fait en sorte
      // que si l'utilisateur n'a pas de cv, il en crée un
      const { data } = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${
          globalContext.user.id
        }/cvs`
      );
      const cvId = data.id;

      experience.cvId = cvId;
      await globalContext.apiService.update(
        `${import.meta.env.VITE_BACKEND_URL}/api/experience/${id}`,
        experience
      );

      globalContext.setMsgContent("L'expérience a été modifiée avec");
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
    setExperience((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Modifier votre expérience</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="container-input">
            <Input
              titleInput="Intitulé du poste *"
              holderText="Chef de projet"
              fieldName="title"
              inputType="text"
              valueInput={experience}
              handleChange={handleFormChange}
            />
            <Input
              titleInput="Entreprise *"
              holderText="Inoxia"
              fieldName="company"
              inputType="text"
              valueInput={experience}
              handleChange={handleFormChange}
            />
            <Input
              titleInput="Ville *"
              holderText="Bordeaux"
              fieldName="city"
              inputType="text"
              valueInput={experience}
              handleChange={handleFormChange}
            />
            <Select
              titleSelect="Type de contrat *"
              valueSelect="CDI"
              fieldName="type"
              handleChange={handleFormChange}
            >
              <option value="stage" selected={experience.type === "stage"}>
                Stage
              </option>
              <option
                value="alternance"
                selected={experience.type === "alternance"}
              >
                Alternance
              </option>
              <option value="CDD" selected={experience.type === "CDD"}>
                CDD
              </option>
              <option value="CDI" selected={experience.type === "CDI"}>
                CDI
              </option>
            </Select>
            <div className="container-checkbox-experience">
              <CheckboxCondition
                textCondition="J'occupe ce poste actuellement"
                fieldName="isWorking"
                handleChange={() => {
                  setExperience((prevData) => {
                    const newValue = !prevData.isWorking;
                    return {
                      ...prevData,
                      isWorking: newValue,
                    };
                  });
                }}
                checked={!!experience.isWorking}
              />
            </div>
            <DateComponent
              titleCalendar="De :"
              fieldName="dateBegin"
              handleChange={handleFormChange}
              value={experience.dateBegin}
            />
            {!experience.isWorking && (
              <DateComponent
                titleCalendar="Jusqu'au :"
                fieldName="dateEnd"
                handleChange={handleFormChange}
                value={experience.dateEnd}
              />
            )}

            <TextArea
              titleInput="Description du poste *"
              holderText="Lorem ipsum dolor si amet"
              fieldName="description"
              inputType="text"
              valueInput={experience}
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
            Mettre à jour l'expérience
          </button>
        </form>
      </div>
    </>
  );
}

export default EditExperience;
