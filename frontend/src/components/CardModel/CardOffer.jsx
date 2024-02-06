import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function CardOffer() {
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
          <ButtonMini textBtn="Postuler" />
        </div>
      ))}
    </div>
  );
}

//   return (
//     <div>
//       {offers.map((offer) => (
//         <div className="card-container" key={offer.id}>
//           {" "}
//           {/* Ajoutez une clé unique pour chaque élément de la liste */}
//           <h3 className="label-offre">{offer.title}</h3>{" "}
//           {/* Utilisez la propriété 'title' pour afficher le titre de l'offre */}
//           <div className="competence">
//             {/* Affichez les compétences de l'offre si nécessaire */}
//             {offer.competences.map((competence) => (
//               <h3 key={competence.id}>{competence.name}</h3>
//             ))}
//           </div>
//           <h5 className="poste-champs">
//             {offer.type} - {offer.city}
//           </h5>
//           <h4 className="entreprise-champs">{offer.company}</h4>{" "}
//           {/* Utilisez la propriété 'company' pour afficher le nom de l'entreprise */}
//           <p className="p-description">{offer.description}</p>{" "}
//           {/* Utilisez la propriété 'description' pour afficher la description de l'offre */}
//           <ButtonMini textBtn="Postuler" />
//         </div>
//       ))}
//     </div>
//   );
// }

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
