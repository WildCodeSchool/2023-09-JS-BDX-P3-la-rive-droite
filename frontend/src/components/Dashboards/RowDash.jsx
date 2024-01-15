import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./RowDash.css";

function RowDash() {
  const { goToOffer, apiService } = useGlobalContext();

  const [offers, setOffers] = useState([]);

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

  const deleteOffer = async (id) => {
    apiService.delete(`http://localhost:3310/api/offer/${id}`);

    fetchOffers();
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
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
            <button type="button" onClick={() => deleteOffer(offer.id)}>
              .
              <i className="fa-solid fa-trash" />.
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RowDash;
