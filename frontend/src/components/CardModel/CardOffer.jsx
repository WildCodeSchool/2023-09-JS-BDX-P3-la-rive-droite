import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function CardOffer() {
  const navigate = useNavigate();
  const handleClickPostuler = () => navigate("/login");
  const trimText = (chaine, limite) => {
    if (chaine.length <= limite) {
      return chaine;
    }
    return `${chaine.slice(0, limite)}...`;
  };
  const globalContext = useGlobalContext();
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const getAllOffer = async () => {
      try {
        const response = await globalContext.apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/offer`
        );
        setOffers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllOffer();
  }, []);

  return (
    <div>
      {offers.map((offer) => (
        <div className="card-container" key={offer.id}>
          <h3 className="label-offre">{offer.title}</h3>
          <h5 className="poste-champs">
            {offer.type} - {offer.city}
          </h5>
          <h4 className="entreprise-champs">{offer.company}</h4>
          <p className="p-description ">{trimText(offer.mission, 250)}</p>
          <ButtonMini onClick={handleClickPostuler} textBtn="Postuler" />
        </div>
      ))}
    </div>
  );
}

CardOffer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    competences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CardOffer;
