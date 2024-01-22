import React, { useState, useEffect } from "react";
// import CardOffre from "../../components/CardModel/CardOffre";
import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./Home.css";
import CardOffre from "../../components/CardModel/CardOffre";
import { useUserContext } from "../../contexts/UserContext";
// import axios from "axios";

function Home() {
  const { goToOffer } = useGlobalContext();
  const { toggleFavorite } = useUserContext();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffer = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/offer");
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
        } else {
          console.error("Echec de la récupération des données.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getOffer();

    //     const getOffer = async () => {
    //       try {
    //         const response = await axios.get("http://localhost:3310/api/offer");
    //         console.log(response.data);
    //         setOffers(response.data);
    //   } catch (err) {
    //     console.error(err);
    //   };
    // }

    // getOffer();
  }, []);

  return (
    <>
      <HeaderLongResearch textTitle="Bienvenue sur" textTitle2="nos offres" />
      <div className="container-page">
        <h2>Les offres qui matchent !</h2>
        <div className="offer-container">
          {offers.map((offer) => (
            <CardOffre
              key={offer.id}
              offer={offer}
              toggleFavorite={toggleFavorite}
              goToOffer={goToOffer}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
