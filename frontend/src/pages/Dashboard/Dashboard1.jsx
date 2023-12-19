import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";

function TitleDashboard1() {
  return (
    <div>
      <div className="title-btn">
        <h3 className="tab">Tableau de bord</h3>
        <ButtonMini textBtn="Ajouter une offre" />
      </div>
      <TitleDashboard />
    </div>
  );
}

export default TitleDashboard1;
