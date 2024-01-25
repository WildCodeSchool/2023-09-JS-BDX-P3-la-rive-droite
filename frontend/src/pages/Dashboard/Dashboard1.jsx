// import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import RowDash from "../../components/Dashboards/RowDash";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useAdminContext } from "../../contexts/AdminContext";

function Dashboard1() {
  const { unauthorized } = useGlobalContext();
  const { handleAddOffer, handleUsers } = useAdminContext();

  return window.location.pathname === "/dashboard" ||
    window.location.pathname === "/dashboard/" ? (
    <div className="container">
      <div className="title-btn">
        <h4 className="tab">Tableau de bord</h4>
        <ButtonMini textBtn="Ajouter une offre" onClick={handleAddOffer} />
        <ButtonMini textBtn="Tableau d'Utilisateurs." onClick={handleUsers} />
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
