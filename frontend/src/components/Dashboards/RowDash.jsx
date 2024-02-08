import React, { useState, useEffect } from "react";
// Import de contexts.
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useAdminContext } from "../../contexts/AdminContext";
// Import de style.
import "./RowDash.css";

function RowDash() {
  const { goToOffer, apiService } = useGlobalContext();
  const { goToEditOffer } = useAdminContext();

  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/offer`
      );
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
    try {
      await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/offer/${id}`
      );

      // Methode 01.
      // window.location.reload();
      // Methode 02.
      setOffers((previousOffer) =>
        previousOffer.filter((offer) => offer.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <>
      {/* // <tbody className="rowDash-container"> */}
      {offers.map((offer) => (
        <tr key={offer.id} className="offerDash-item">
          <th scope="row" className="array-box">
            {offer.id}
          </th>
          <td className="array-box">{offer.company}</td>
          <td className="bigArray-box">{offer.email}</td>
          <td className="icon-dash">
            <button
              type="button"
              aria-label="editoffer"
              onClick={() => goToEditOffer(offer.id)}
              className="invisible-button"
            >
              <i className="fa-solid fa-pen" />
            </button>
            <button
              type="button"
              aria-label="getoffer"
              onClick={() => goToOffer(offer.id)}
              className="invisible-button"
            >
              <i className="fa-solid fa-eye" />
            </button>
            <button
              type="button"
              aria-label="deleteoffer"
              onClick={() => deleteOffer(offer.id)}
              className="invisible-button"
            >
              <i className="fa-solid fa-trash" />
            </button>
          </td>
        </tr>
      ))}
    </>
    // </tbody>
  );
}

export default RowDash;
