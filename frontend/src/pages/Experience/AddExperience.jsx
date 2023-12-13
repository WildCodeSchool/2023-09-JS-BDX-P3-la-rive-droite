import "./add-experience.css";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import Date from "../../components/Inputs/Date";

function AddExperience() {
  return (
    <>
      <HeaderCourt />
      <div className="container-page with-rounded-border">
        <div className="offre-container">
          <h1>Ajouter une expérience</h1>
        </div>
        <form action="">
          <Input />
          <Input />
          <Input />
          <Select />
          <div className="container-checkbox-experience">
            <CheckboxCondition />
          </div>
          <Date />
          <Date />
          <ButtonMaxi />
        </form>
      </div>
    </>
  );
}

export default AddExperience;
