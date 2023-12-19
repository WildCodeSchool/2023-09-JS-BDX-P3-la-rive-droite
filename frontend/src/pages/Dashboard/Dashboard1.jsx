import PropTypes from "prop-types";
import TitleDashboard from "../../components/Dashboards/TitleDashboard";
import ButtonMini from "../../components/Boutons/ButtonMini";

function TitleDashboard1({ refAnnonce }) {
  return (
    <div>
      <div className="title-btn">
        <h3 className="tab">Tableau de bord</h3>
        <ButtonMini textBtn="Ajouter une offre" />
      </div>
      <h3 className="ref"> REF OFFRE : {refAnnonce} </h3>
      <TitleDashboard />
    </div>
  );
}

TitleDashboard1.propTypes = {
  refAnnonce: PropTypes.string.isRequired,
};
export default TitleDashboard1;
