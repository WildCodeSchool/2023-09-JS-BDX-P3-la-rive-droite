import { Outlet, useNavigate } from "react-router-dom";
import RowDash from "../../components/Dashboards/RowDash";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";
// import { useAdminContext } from "../../contexts/AdminConte";

function Dashboard1() {
  const navigate = useNavigate();
  // const { handleTest } = useAdminContext();

  const handleAddOffer = () => {
    navigate("/offer");
  };

  return window.location.pathname === "/dashboard" ||
    window.location.pathname === "/dashboard/" ? (
    <div>
      <div className="title-btn">
        <h4 className="tab">Tableau de bord</h4>
        <ButtonMini textBtn="Ajouter une offre" onClick={handleAddOffer} />
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
