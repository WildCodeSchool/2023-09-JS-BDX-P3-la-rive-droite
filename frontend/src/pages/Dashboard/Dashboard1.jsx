import { Outlet } from "react-router-dom";
import RowDash from "../../components/Dashboards/RowDash";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";

function Dashboard1() {
  return window.location.pathname === "/dashboard" ||
    window.location.pathname === "/dashboard/" ? (
    <div>
      <div className="title-btn">
        <h3 className="tab">Tableau de bord</h3>
        <ButtonMini textBtn="Ajouter une offre" />
      </div>
      <TitleDashboard
        labelDash="ID Offres"
        labelDash2="Entreprises"
        labelDash3="Candidats"
        labelDash4="Statut Offre"
        labelDash5="Référent"
        labelDash6="Actions"
      />
      <RowDash />
    </div>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard1;
