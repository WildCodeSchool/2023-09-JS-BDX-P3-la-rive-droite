import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import RowDash2 from "../../components/Dashboards/RowDash2";
import ButtonMini from "../../components/Boutons/ButtonMini";
import { useGlobalContext } from "../../contexts/GlobalContext";

function Dashboard2({ refAnnonce }) {
  const { unauthorized } = useGlobalContext();

  useEffect(() => {
    unauthorized();
  }, []);

  return (
    <div>
      <div className="title-btn">
        <h2 className="tab">Tableau de bord</h2>
      </div>
      <h3 className="ref"> REF OFFRE : {refAnnonce} </h3>
      <h4>CANDIDATS</h4>
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
      <ButtonMini textBtn="Envoyer" />
      <RowDash2 />
    </div>
  );
}

Dashboard2.propTypes = {
  refAnnonce: PropTypes.string.isRequired,
};
export default Dashboard2;
