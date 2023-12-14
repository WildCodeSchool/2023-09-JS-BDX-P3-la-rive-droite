import ButtonMini from "../Boutons/ButtonMini";
import "./card-model.css";

function CardFavoris() {
  return (
    <div className="card-container">
      <div className="card-icons">
        <div className="icon-view">
          <i className="fa-regular fa-heart" />
        </div>
      </div>

      <h3 className="label-offre"> Chef de projet</h3>
      <h4 className="entreprise-champs"> Inoxia</h4>
      <h5 className="poste-champs">CDI - Bordeaux - Publiée le 24/11/2023</h5>
      <p className="p-description ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
        amet dui et libero tempus auctor...
      </p>
      <ButtonMini />
    </div>
  );
}

export default CardFavoris;
