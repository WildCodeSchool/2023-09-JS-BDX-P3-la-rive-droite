import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";

function CardOffer() {
  return (
    <div className="card-container">
      <h3 className="pourcentage">Titre de l'offre</h3>
      <div className="competence">
        <h3>HTML, CSS, JAVASCRIPT, REACT</h3>
      </div>
      <h3 className="label-offre">Titre de l'offre</h3>
      <h4 className="entreprise-champs">Nom entreprise</h4>
      <p className="p-description "> Description entreprise</p>
      <ButtonMini textBtn="Postuler" />
    </div>
  );
}

export default CardOffer;
