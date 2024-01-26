import PropTypes from "prop-types";
import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";

function CardOffre({ offer, goToOffer }) {
  const trimText = (chaine, limite) => {
    if (chaine.length <= limite) {
      return chaine;
    }
    return `${chaine.slice(0, limite)}...`;
  };
  return (
    <div className="card-container">
      <h3 className="label-offre">{offer.title}</h3>
      <h4 className="entreprise-champs">{offer.company}</h4>
      <h5 className="poste-champs">
        {offer.type} - {offer.city}
      </h5>
      <p className="p-description ">{trimText(offer.info, 250)}</p>
      <ButtonMini textBtn="Postuler" onClick={() => goToOffer(offer.id)} />
    </div>
  );
}
CardOffre.propTypes = {
  goToOffer: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOffre;
