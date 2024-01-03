import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import { useAdminContext } from "../../contexts/AdminContext";
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "./offer.css";

function Offer() {
  const { handleAddOffer, addOffer, setAddOffer } = useAdminContext();
  const { errorMsg, succesMsg, msgContent, handleChange } = useGlobalContext();
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
            handleChange={(e) => handleChange(setAddOffer, "company", e)}
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
            fieldName="searchProfile"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) =>
              handleChange(setAddOffer, "searchProfile", event)
            }
          />
          <Input
            titleInput="Lieux de travail"
            holderText="Présentiel"
            fieldName="workPlace"
            inputType="text"
            valueInput={addOffer}
            handleChange={(event) =>
              handleChange(setAddOffer, "workPlace", event)
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

export default Offer;
