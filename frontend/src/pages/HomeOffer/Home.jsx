import React, { useState, useEffect } from "react";
import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./Home.css";
import CardOffre from "../../components/CardModel/CardOffre";
import { useUserContext } from "../../contexts/UserContext";

function Home() {
  const { goToOffer, apiService } = useGlobalContext();
  const { toggleFavorite } = useUserContext();
  const [matchingOffers, setMatchingOffers] = useState([]);

  useEffect(() => {
    // const getOffer = async () => {
    //   try {
    //     const response = await fetch(
    //       `${import.meta.env.VITE_BACKEND_URL}/api/offer`
    //     );
    //     if (response.ok) {
    //       const data = await response.json();
    //       setOffers(data);
    //     } else {
    //       console.error("Echec de la récupération des données.");
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    const getOfferMatch = async () => {
      try {
        const response = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/me/get-matching-offers`
        );
        setMatchingOffers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getOfferMatch();
    // getOffer();

    //     const getOffer = async () => {
    //       try {
    //         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/offer`);
    //         console.log(response.data);
    //         setOffers(response.data);
    //   } catch (err) {
    //     console.error(err);
    //   };
    // }

    // getOffer();
  }, []);

  return (
    <div id="home">
      <HeaderLongResearch
        textTitle="Cabinet de recrutement informatique
"
        textTitle2="Nos offres d'emploi"
      />
      <div className="container-page">
        <h2>Les offres qui matchent !</h2>
        <div className="offer-container">
          {matchingOffers.map((offer) => (
            <CardOffre
              key={offer.id}
              offer={offer}
              toggleFavorite={toggleFavorite}
              goToOffer={goToOffer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
