import "./card-model.css";
// import axios from "axios";

function CardFormation() {
  // const Course = async () => {
  //   try {
  //     // const data =
  //     await axios.get(`http://localhost:3310/api/course/`);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <div className="card-container">
      <h3 className="diplome">Master 1</h3>
      <h4 className="dates">11/07/2023 - 25/02/2024</h4>
      <p className="school">Wild Code School - Bordeaux</p>
    </div>
  );
}

export default CardFormation;
