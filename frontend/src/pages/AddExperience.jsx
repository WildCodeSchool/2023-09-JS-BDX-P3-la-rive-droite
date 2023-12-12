import "../style/style_components/add-experience.css";
import ButtonMaxi from "../components/ButtonMaxi";
import HeaderLong from "../components/HeaderLong";
import Input from "../components/Input";
import Select from "../components/Select";
import CheckboxCondition from "../components/CheckboxCondition";
import Date from "../components/Date";

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
