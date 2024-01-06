import React, { useState, useEffect } from "react";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
// Import de context.
import { useUserContext } from "../../contexts/UserContext";
import { useGlobalContext } from "../../contexts/GlobalContext";
// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import du style.
import "./read-offer.css";

function ReadOffer() {
  const { handleAddCv } = useUserContext();
  const { errorMsg, succesMsg, msgContent } = useGlobalContext();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffer = async () => {
      try {
        const response = await fetch(`https://localhost:3310/api/offer/12`);
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setOffers(data);
          // console.log(offers);
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
      <div className="container-page with-rounded-border">
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
            {/* <ButtonMini textBtn="Postuler" /> */}
          </div>
        ))}
        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>
        <ButtonMaxi textBtn="Enregistrer" clickFunc={handleAddCv} />
      </div>
    </>
  );
}

export default ReadOffer;
