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
  return (
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
  );
}

export default RowDash;
