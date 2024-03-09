import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";

function CardOffre({ offer }) {
  const navigate = useNavigate();
  const trimText = (chaine, limite) => {
    if (chaine.length <= limite) {
      return chaine;
    }
    return `${chaine.slice(0, limite)}...`;
  };
  return (
    <div className="card-container">
      <h3 className="pourcentage">
        Vous avez {offer.matchingCompetencesRatio} % des compétences requises
      </h3>

      <div className="competence-match">
        {offer.competences.map((competence) => {
          let isMatching = false;
          offer.matchingCompetences.forEach((matchingCompetence) => {
            if (matchingCompetence.id === competence.id) {
              isMatching = true;
            }
          });
          return (
            <span
              className={isMatching ? "competence is-matching" : "competence"}
              key={competence.id}
            >
              {competence.name}
            </span>
          );
        })}
      </div>

      <h3 className="label-offre">{offer.title}</h3>

      <h4 className="entreprise-champs">{offer.company}</h4>
      <h5 className="poste-champs">
        {offer.type} - {offer.city}
      </h5>
      <p className="p-description ">{trimText(offer.info, 250)}</p>
      <ButtonMini
        textBtn="Postuler"
        onClick={() => navigate(`/offer/${offer.id}`)}
      />
    </div>
  );
}
CardOffre.propTypes = {
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
    matchingCompetences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    matchingCompetencesRatio: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardOffre;
