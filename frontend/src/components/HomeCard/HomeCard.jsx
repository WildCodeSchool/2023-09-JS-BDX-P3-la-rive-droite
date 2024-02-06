import { useGlobalContext } from "../../contexts/GlobalContext";
import "./HomeCard.css";

function HomeCard() {
  const { user } = useGlobalContext();
  return (
    <div className="big-homeCard-container">
      {user ? (
        <h1>
          {user.firstname}, Bienvenue chez <span>Externatic !</span>
        </h1>
      ) : (
        <h1>
          Bienvenue chez <span>Externatic !</span>
        </h1>
      )}
      <div className="homeCard-container">
        <div className="card-one">
          <i className="fa-regular fa-address-book" />
          <h2>Inscrivez-vous!</h2>
          <p>
            En vous inscrivant, initiez votre retour à l'emploi avec notre
            plateforme ! Explorez des opportunités, acquérez des compétences,
            créez des liens professionnels enrichissants. Notre engagement est
            de vous fournir les outils nécessaires pour surmonter les défis et
            atteindre vos objectifs professionnels, faisant ainsi de votre
            avenir une promesse de réussite.{" "}
          </p>
        </div>
        <div className="card-two">
          <i className="fa-regular fa-file" />
          <h2>Remplissez votre CV</h2>
          <p>
            Vous allez pouvoir ajouter vos différentes formations et expériences
            qui valoriseront davantage votre profil auprès des recruteurs. Cette
            vitrine renforcera votre présence en ligne, augmentant vos chances
            de captiver l'attention des employeurs. Exploitez cette opportunité
            pour renforcez votre position sur le marché du travail et donnez un
            nouvel élan à votre carrière.{" "}
          </p>
        </div>
        <div className="card-three">
          <i className="fa-regular fa-eye" />
          <h2>Consultez les offres</h2>
          <p>
            Avec votre CV completé, notre système sélectionne minutieusement des
            offres alignées sur vos compétences, maximisant ainsi vos chances
            d'entretiens réussis. Simplifiant votre parcours professionnel, nous
            vous dirigeons vers des opportunités reflétant au mieux vos
            aptitudes, facilitant la recherche d'emploi et favorisant des
            entrevues significatives.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
