// import React, { useEffect } from "react";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
// Import de Context.
import { useAdminContext } from "../../contexts/AdminContext";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "./add-offer.css";

function AddOffer() {
  const { addOffer, setAddOffer } = useAdminContext();
  const {
    errorMsg,
    setErrorMsg,
    succesMsg,
    setSuccesMsg,
    msgContent,
    setMsgContent,
    handleChange,
    apiService,
  } = useGlobalContext();

  const handleAddOffer = () => {
    if (
      addOffer.title === "" ||
      addOffer.company === "" ||
      addOffer.type === "" ||
      addOffer.city === "" ||
      addOffer.mission === "" ||
      addOffer.search_profile === "" ||
      addOffer.work_place === "" ||
      addOffer.salary === "" ||
      addOffer.info === "" ||
      addOffer.email === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 4000);
    } else {
      const postOffer = async () => {
        apiService.post(`http://localhost:3310/api/offer`, addOffer);
      };

      postOffer();

      // console.log(addOffer);

      setMsgContent("L'offre à été ajouté avec");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
      }, 4000);

      setAddOffer({
        title: "",
        company: "",
        type: "",
        city: "",
        mission: "",
        search_profile: "",
        work_place: "",
        salary: "",
        info: "",
        email: "",
      });
    }
  };

  // useEffect(() => {
  //   unauthorized();
  // }, []);

  return (
    <div>
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Ajouter une offre</h1>
          <Input
            titleInput="Titre de l'offre"
            holderText="Développeur Web"
            fieldName="title"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) => handleChange(setAddOffer, "title", event)}
          />
          <Input
            titleInput="Société"
            holderText="BackMarket"
            fieldName="company"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) =>
              handleChange(setAddOffer, "company", event)
            }
          />
          <Select
            titleSelect="Type de contrat"
            fieldName="type"
            handleChange={(event) => handleChange(setAddOffer, "type", event)}
          >
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
            <option value="autre">Autre</option>
          </Select>
          <Input
            titleInput="Ville"
            holderText="Bordeaux"
            inputType="text"
            fieldName="city"
            valueInput={addOffer}
            handleChange={(event) => handleChange(setAddOffer, "city", event)}
          />
          <TextArea
            titleInput="Missions"
            holderText="Pour cette mission, vous allez devoir réaliser ..."
            fieldName="mission"
            valueInput={addOffer}
            handleChange={(event) =>
              handleChange(setAddOffer, "mission", event)
            }
          />
          <Input
            titleInput="Profil recherché"
            holderText="Junior avec 10 ans d'experience"
            fieldName="search_profile"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) =>
              handleChange(setAddOffer, "search_profile", event)
            }
          />
          <Input
            titleInput="Lieux de travail"
            holderText="Présentiel"
            fieldName="work_place"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) =>
              handleChange(setAddOffer, "work_place", event)
            }
          />
          <Input
            titleInput="Salaire"
            holderText="100k"
            fieldName="salary"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) => handleChange(setAddOffer, "salary", event)}
          />
          <TextArea
            titleInput="Infos complémentaires"
            holderText="Le travail est cool"
            fieldName="info"
            valueInput={addOffer}
            handleChange={(event) => handleChange(setAddOffer, "info", event)}
          />
          <Input
            titleInput="Email du client lié à l'offre"
            holderText="Votre email"
            fieldName="email"
            inputType="email"
            valueInput={addOffer}
            handleChange={(event) => handleChange(setAddOffer, "email", event)}
          />
          <div>
            {errorMsg && <ErrorMsg message={msgContent} />}
            {succesMsg && <SuccesMsg message={msgContent} />}
          </div>
          <ButtonMaxi textBtn="Ajouter l'offre" clickFunc={handleAddOffer} />
        </div>
      </div>
    </div>
  );
}

export default AddOffer;
