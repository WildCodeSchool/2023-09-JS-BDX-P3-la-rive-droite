import "./card-model.css";

function CardModel() {
  return (
    <div className="card-container">
      <div className="card-icons">
        <div className="icon-view">
          <i className="fa-solid fa-eye" />
        </div>
        <div className="icon-modify">
          <i className="fa-solid fa-pen" />
        </div>
        <div className="icon-trash">
          <i className="fa-solid fa-trash-can" />
        </div>
      </div>

      <h2 className="date-poste"> 25/08/2023 au 01/12/2023 </h2>
      <h3 className="label-champs"> Chef de projet</h3>
      <h4 className="entreprise-champs"> Inoxia</h4>
      <h5 className="poste-champs">CDI - Bordeaux </h5>
      <p className="p-description ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
        amet dui et libero tempus auctor...
      </p>
    </div>
  );
}

export default CardModel;
