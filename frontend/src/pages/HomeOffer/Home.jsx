import React, { useState, useEffect } from "react";
import CardOffre from "../../components/CardModel/CardOffre";
import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";
import ButtonMini from "../../components/Boutons/ButtonMini";
import "./Home.css";
// import axios from "axios";

function Home() {
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
          <CardOffre />
          <CardOffre />
          <CardOffre />
          <CardOffre />
          {offers.map((offer, key) => (
            <div className="card-container" key={key.id}>
              <div className="card-icons">
                <div className="icon-view">
                  <i className="fa-regular fa-heart" />
                </div>
              </div>

              <h3 className="label-offre">{offer.title}</h3>
              <h4 className="entreprise-champs">{offer.company}</h4>
              <h5 className="poste-champs">
                {offer.type} - {offer.city} - Publiée le 24/11/2023
              </h5>
              <p className="p-description ">{offer.info}</p>
              <ButtonMini textBtn="Postuler" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
