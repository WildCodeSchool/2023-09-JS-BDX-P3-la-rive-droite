import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";
import RowDash from "../../components/Dashboards/RowDash";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useAdminContext } from "../../contexts/AdminContext";

function Dashboard1() {
  const { unauthorized } = useGlobalContext();
  const { handleAddOffer, handleUsers } = useAdminContext();

  useEffect(() => {
    unauthorized();
  }, []);

  return window.location.pathname === "/dashboard" ||
    window.location.pathname === "/dashboard/" ? (
    <div className="container">
      <div className="title-btn">
        <h4 className="tab">Tableau de bord</h4>
        <ButtonMini textBtn="Ajouter une offre" onClick={handleAddOffer} />
        <ButtonMini textBtn="Tableau d'Utilisateurs" onClick={handleUsers} />
      </div>
      <TitleDashboard
        labelDash="ID"
        labelDash2="Entreprises"
        labelDash3=" "
        labelDash4="Référent"
        labelDash5=" "
        labelDash6=" "
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
