import React, { useState, useEffect } from "react";
import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./Home.css";
import CardOffre from "../../components/CardModel/CardOffre";
import { useUserContext } from "../../contexts/UserContext";

import HomeCard from "../../components/HomeCard/HomeCard";
import CardOffer from "../../components/CardModel/CardOffer";

function Home() {
  const { goToOffer, apiService, user } = useGlobalContext();
  const { toggleFavorite } = useUserContext();
  const [matchingOffers, setMatchingOffers] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div id="home">
      <HeaderLongResearch
        textTitle="Cabinet de recrutement informatique"
        textTitle2="Nos offres d'emplois"
      />
      <div className="container-page">
        <HomeCard />
        {user ? (
          <h1>
            Les offres qui <span>matchent !</span>
          </h1>
        ) : null}
        <div className="offer-container">
          {user ? (
            matchingOffers.map((offer) => (
              <CardOffre
                key={offer.id}
                offer={offer}
                toggleFavorite={toggleFavorite}
                goToOffer={goToOffer}
              />
            ))
          ) : (
            <div className="offer-container-offer">
              <CardOffer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
