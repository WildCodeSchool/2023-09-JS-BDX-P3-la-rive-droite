import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Input from "../../components/Inputs/Input";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";

function Search() {
  return (
    <div>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <h1>Ajouter une expérience</h1>

        <div className="container-input">
          <Input titleInput="Intitulé du poste *" holderText="Chef de projet" />
          <Input titleInput="Entreprise *" holderText="Inoxia" />

          <div className="container-checkbox-experience">
            <CheckboxCondition textCondition="J'occupe ce poste actuellement" />
            <CheckboxCondition textCondition="J'occupe ce poste actuellement" />
            <CheckboxCondition textCondition="J'occupe ce poste actuellement" />
            <CheckboxCondition textCondition="J'occupe ce poste actuellement" />
          </div>

          <ButtonMaxi textBtn="Ajouter l'expérience" />
        </div>
      </div>
    </div>
  );
}
export default Search;
