import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
// Import de Context.
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "./add-offer.css";

function AddOffer() {
  // const { addOffer, setAddOffer } = useAdminContext();

  const globalContext = useGlobalContext();

  const [offer, setOffer] = useState([]);
  const { id } = useParams();

  const fetchOffer = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/offer/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setOffer(data);
      } else {
        console.error("Echec de la récupération des données.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddOffer = () => {
    if (
      offer.title === "" ||
      offer.company === "" ||
      offer.type === "" ||
      offer.city === "" ||
      offer.mission === "" ||
      offer.search_profile === "" ||
      offer.work_place === "" ||
      offer.salary === "" ||
      offer.info === "" ||
      offer.email === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else {
      const updateOffer = async () => {
        globalContext.apiService.update(
          `${import.meta.env.VITE_BACKEND_URL}/api/offer/${id}`,
          offer,
          id
        );
      };

      updateOffer();
      globalContext.setMsgContent("L'offre à été ajouté avec");
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 4000);

      // setAddOffer({
      //   title: "",
      //   company: "",
      //   type: "",
      //   city: "",
      //   mission: "",
      //   search_profile: "",
      //   work_place: "",
      //   salary: "",
      //   info: "",
      //   email: "",
      // });
    }
  };

  useEffect(() => {
    globalContext.unauthorized();
    fetchOffer();
  }, []);

  return (
    <div>
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Ajouter une offre</h1>
          <h2>ID Offre = {id}</h2>
          <Input
            titleInput="Titre de l'offre"
            holderText="Développeur Web"
            fieldName="title"
            inputType="text"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "title", event)
            }
          />
          <Input
            titleInput="Société"
            holderText="BackMarket"
            fieldName="company"
            inputType="text"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "company", event)
            }
          />
          <Select
            titleSelect="Type de contrat"
            fieldName="type"
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "type", event)
            }
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
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "city", event)
            }
          />
          <TextArea
            titleInput="Missions"
            holderText="Pour cette mission, vous allez devoir réaliser ..."
            fieldName="mission"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "mission", event)
            }
          />
          <Input
            titleInput="Profil recherché"
            holderText="Junior avec 10 ans d'experience"
            fieldName="search_profile"
            inputType="text"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "search_profile", event)
            }
          />
          <Input
            titleInput="Lieux de travail"
            holderText="Présentiel"
            fieldName="work_place"
            inputType="text"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "work_place", event)
            }
          />
          <Input
            titleInput="Salaire"
            holderText="100k"
            fieldName="salary"
            inputType="text"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "salary", event)
            }
          />
          <TextArea
            titleInput="Infos complémentaires"
            holderText="Le travail est cool"
            fieldName="info"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "info", event)
            }
          />
          <Input
            titleInput="Email du client lié à l'offre"
            holderText="Votre email"
            fieldName="email"
            inputType="email"
            valueInput={offer}
            handleChange={(event) =>
              globalContext.handleChange(setOffer, "email", event)
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
          <ButtonMaxi textBtn="Ajouter l'offre" clickFunc={handleAddOffer} />
        </div>
      </div>
    </div>
  );
}

export default AddOffer;
