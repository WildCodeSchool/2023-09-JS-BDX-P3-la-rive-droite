import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
// Import du style.
import "./read-offer.css";

function ReadOffer() {
  const [offer, setOffer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getOffer = async () => {
      try {
        const response = await fetch(`http://localhost:3310/api/offer/${id}`);
        if (response.ok) {
          const data = await response.json();
          setOffer(data);
        } else {
          console.error("Echec de la récupération des données.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getOffer();
  }, []);

  return (
    <>
      <HeaderCourt />

      <div className="container-page with-rounded-border offer-card">
        <div>
          <h1 className="title-page">Postuler à l'offre</h1>
        </div>
        <div className="card-container">
          <div className="card-icons">
            <div className="icon-view">
              <i className="fa-regular fa-heart" />
            </div>
          </div>

          <h3 className="title-offer">{offer.title}</h3>
          <h4 className="company-offer">{offer.company}</h4>
          <p className="type-offer">{offer.type}</p>

          <p className="description-word">Missions</p>
          <p className="p-description">{offer.info}</p>

          <p className="sub-title">Lieu :</p>
          <p className="info-offer">{offer.city}</p>

          <p className="sub-title">Profil recherché :</p>
          <p className="info-offer">{offer.search_profile}</p>

          <p className="sub-title">Lieu de travail :</p>
          <p className="info-offer">{offer.work_place}</p>

          <p className="sub-title">Salaire :</p>
          <p className="info-offer">{offer.salary}</p>

          <p className="sub-title">Informations supplémentaires :</p>
          <p className="info-offer">{offer.info}</p>

          <ButtonMaxi textBtn="Postuler" />
          <ButtonMaxi textBtn="Contacter l'entreprise" />
        </div>
      </div>
    </>
  );
}

export default ReadOffer;
