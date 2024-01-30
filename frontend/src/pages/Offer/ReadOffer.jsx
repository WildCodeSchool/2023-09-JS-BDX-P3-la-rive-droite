import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import "./read-offer.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function ReadOffer() {
  const [offer, setOffer] = useState([]);
  const [skillsOffer, setSkillsOffer] = useState([]);
  const { apiService } = useGlobalContext();

  const { id } = useParams();

  useEffect(() => {
    const getOffer = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/offer/${id}`
        );
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

    const getSkillsOffer = async () => {
      try {
        const response = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/offers/${id}/skills`
        );

        setSkillsOffer(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSkillsOffer();
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
          <div className="competence-match-offer">
            {skillsOffer.map((skill) => (
              <p className="info-offer">{skill.name}</p>
            ))}
          </div>

          <ButtonMaxi textBtn="Postuler" />
        </div>
      </div>
    </>
  );
}

export default ReadOffer;
