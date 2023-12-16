import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import TextArea from "../../components/Inputs/TextArea";
import HeaderCourt from "../../components/Headers/HeaderCourt";

function Offer() {
  return (
    <div>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une offre</h1>
        <Input
          titleInput="Titre de l'offre"
          holderText="Développeur Web"
          inputType="text"
        />
        <Input titleInput="Société" holderText="BackMarket" inputType="text" />
        <Select titleSelect="Type de contrat" valueSelect="CDI" />
        <Input titleInput="Ville" holderText="Bordeaux" inputType="text" />
        <TextArea
          titleInput="Missions"
          holderText="1 rue Victor Hugo, 33300 Bordeaux"
        />
        <Input
          titleInput="Profil recherché"
          holderText="Sup de pub"
          inputType="text"
        />
        <Input
          titleInput="Lieux de travail"
          holderText="Présentiel"
          inputType="text"
        />
        <Input titleInput="Salaire" holderText="100k" inputType="text" />
        <TextArea
          titleInput="Infos complémentaires"
          holderText=" Le travail est cool"
        />

        <Input
          titleInput="Email du client lié à l'offre"
          holderText="Votre email"
          inputType="email"
        />
        <ButtonMaxi textBtn="Ajouter l'offre" />
      </div>
    </div>
  );
}

export default Offer;
