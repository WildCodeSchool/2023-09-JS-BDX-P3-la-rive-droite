import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import RowDash2 from "../../components/Dashboards/RowDash2";

function Dashboard3() {
  return (
    <div>
      <div className="title-btn">
        <h2 className="tab">Tableau de bord</h2>
      </div>
      <h4>Utilisateurs.</h4>
      <div>
        <TitleDashboard
          labelDash="ID"
          labelDash2="Noms"
          labelDash3="Prénoms"
          labelDash4="Tel"
          labelDash5="Email"
          labelDash6="CV"
        />
      </div>
      <RowDash2 />
    </div>
  );
}

export default Dashboard3;
