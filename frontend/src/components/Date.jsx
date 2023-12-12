import "../style/style_components/date.css";

function Date() {
  return (
    <div className="container-date">
      <label className="label-champs-date" htmlFor="start">
        Date de début
      </label>

      <input className="date-background" type="date" id="start" name="date" />
    </div>
  );
}
export default Date;
