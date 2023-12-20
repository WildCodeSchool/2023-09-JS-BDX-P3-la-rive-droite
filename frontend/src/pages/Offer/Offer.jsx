import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import "./offer.css";
import { useAdminContext } from "../../contexts/AdminContext";

function Offer() {
  const { handleTest, handleChange, addOffer } = useAdminContext();

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
            handleChange={handleChange}
          />
          <Input
            titleInput="Société"
            holderText="BackMarket"
            fieldName="company"
            inputType="text"
            valueInput={addOffer}
            handleChange={handleChange}
          />
          <Select titleSelect="Type de contrat" valueSelect="CDI" />
          <Input
            titleInput="Ville"
            holderText="Bordeaux"
            inputType="text"
            fieldName="city"
            valueInput={addOffer}
            handleChange={handleChange}
          />
          <TextArea
            titleInput="Missions"
            holderText="1 rue Victor Hugo, 33300 Bordeaux"
            fieldName="location"
            valueInput={addOffer}
            handleChange={handleTest}
          />
          <Input
            titleInput="Profil recherché"
            holderText="Junior avec 10 ans d'experience"
            fieldName="searchProfile"
            inputType="text"
            valueInput={addOffer}
            handleChange={handleChange}
          />
          <Input
            titleInput="Lieux de travail"
            holderText="Présentiel"
            fieldName="workPlace"
            inputType="text"
            valueInput={addOffer}
            handleChange={handleChange}
          />
          <Input
            titleInput="Salaire"
            holderText="100k"
            fieldName="salary"
            inputType="text"
            valueInput={addOffer}
            handleChange={handleChange}
          />
          <TextArea
            titleInput="Infos complémentaires"
            holderText=" Le travail est cool"
            fieldName="info"
            valueInput={addOffer}
            handleChange={handleChange}
          />

          <Input
            titleInput="Email du client lié à l'offre"
            holderText="Votre email"
            fieldName="mail"
            inputType="email"
            valueInput={addOffer}
            handleChange={handleChange}
          />
          <ButtonMaxi textBtn="Ajouter l'offre" clickFunc={handleTest} />
        </div>
      </div>
    </div>
  );
}

export default Offer;
