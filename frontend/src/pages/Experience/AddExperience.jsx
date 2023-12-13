import "./add-experience.css";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import HeaderLong from "../../components/Headers/HeaderLong";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import CheckboxCondition from "../../components/Inputs/CheckboxCondition";
import Date from "../../components/Inputs/Date";

function AddExperience() {
  return (
    <>
      <div>
        <HeaderLong />
      </div>
      <div className="container-page-experience">
        <div>
          <div className="offre-container">
            <h1>Ajouter une expérience</h1>
          </div>
          <div className="container-input">
            <Input />
            <Input />
            <Input />
            <Select />
            <div className="container-checkbox-experience">
              <CheckboxCondition />
            </div>
            <Date />
            <Date />
          </div>
          <ButtonMaxi />
        </div>
      </div>
    </>
  );
}

export default AddExperience;
