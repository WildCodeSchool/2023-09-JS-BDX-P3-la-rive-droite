import PropTypes from "prop-types";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import RowDash2 from "../../components/Dashboards/RowDash2";

function Dashboard2({ refAnnonce }) {
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
      <RowDash2 />
    </div>
  );
}

Dashboard2.propTypes = {
  refAnnonce: PropTypes.string.isRequired,
};
export default Dashboard2;
