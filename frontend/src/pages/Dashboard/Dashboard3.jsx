import React, { useEffect } from "react";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";
import RowDash2 from "../../components/Dashboards/RowDash2";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useAdminContext } from "../../contexts/AdminContext";

function Dashboard3() {
  const { unauthorized } = useGlobalContext();
  const { handleOffers } = useAdminContext();

  useEffect(() => {
    unauthorized();
  }, []);

  return (
    <div className="container">
      <div className="title-btn">
        <h2 className="tab">Tableau de bord</h2>
        <ButtonMini textBtn="Tableau d'Offres" onClick={handleOffers} />
      </div>
      <h4>Utilisateurs.</h4>
      <div>
        <TitleDashboard
          labelDash="ID"
          labelDash2="Noms"
          labelDash3="Prénoms"
          labelDash4="Tel"
          labelDash5="Email"
          labelDash6="Admin"
          labelDash7="Action"
        />
      </div>
      <RowDash2 />
    </div>
  );
}

export default Dashboard3;
