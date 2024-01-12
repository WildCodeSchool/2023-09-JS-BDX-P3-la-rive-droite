import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./RowDash.css";

const OfferDash = [
  {
    idOffer: 1,
    Entreprise: "Attack",
    NbrCandidats: 5,
    Statut: "en ligne",
    mailRef: "blabla@gmail.com",
  },
  {
    idOffer: 2,
    Entreprise: "Generate",
    NbrCandidats: 5,
    Statut: "en ligne",
    mailRef: "blabla@gmail.com",
  },
  {
    idOffer: 3,
    Entreprise: "Wisper",
    NbrCandidats: 5,
    Statut: "en ligne",
    mailRef: "blabla@gmail.com",
  },
  {
    idOffer: 4,
    Entreprise: "Joly",
    NbrCandidats: 5,
    Statut: "en ligne",
    mailRef: "blabla@gmail.com",
  },
  {
    idOffer: 5,
    Entreprise: "Polux",
    NbrCandidats: 5,
    Statut: "en ligne",
    mailRef: "blabla@gmail.com",
  },
];

function RowDash() {
  const { goToOffer } = useGlobalContext();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/offer");
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
        } else {
          console.error("Aucune données n'a été récuperé.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchOffers();
  }, []);

  return (
    <>
      <div className="rowDash-container">
        {offers.map((offer) => (
          <div key={offer.idOffer} className="offerDash-item">
            <p className="array-box">{offer.id}</p>
            <p className="array-box">{offer.company}</p>
            <p className="array-box">{offer.NbrCandidats}</p>
            <p className="array-box">En ligne</p>
            <p className="bigArray-box">{offer.email}</p>
            <div className="icon-dash">
              <i className="fa-solid fa-pen" />
              <button type="button" onClick={() => goToOffer(offer.id)}>
                .
                <i className="fa-solid fa-eye" />.
              </button>
              <i className="fa-solid fa-trash" />
            </div>
          </div>
        ))}
      </div>
      <div className="rowDash-container">
        {OfferDash.map((offer) => (
          <div key={offer.idOffer} className="offerDash-item">
            <p className="array-box">{offer.idOffer}</p>
            <p className="array-box">{offer.Entreprise}</p>
            <p className="array-box">{offer.NbrCandidats}</p>
            <p className="array-box">{offer.Statut}</p>
            <p className="bigArray-box">{offer.mailRef}</p>
            <div className="icon-dash">
              <i className="fa-solid fa-pen" />
              <i className="fa-solid fa-eye" />
              <i className="fa-solid fa-trash" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RowDash;
