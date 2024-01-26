import PropTypes from "prop-types";
import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";

function CardOffre({ toggleFavorite, offer, goToOffer }) {
  const trimText = (chaine, limite) => {
    if (chaine.length <= limite) {
      return chaine;
    }
    return `${chaine.slice(0, limite)}...`;
  };
  return (
    <div className="card-container">
      <div className="card-icons">
        <div className="icon-view">
          <button
            className="invisible-button"
            aria-label="toggleFavorite"
            type="button"
            onClick={() => {
              toggleFavorite(offer.id);
            }}
          >
            <i className="fa-solid fa-heart" />
          </button>
        </div>
      </div>

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
  toggleFavorite: PropTypes.func.isRequired,
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
