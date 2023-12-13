import PropTypes from "prop-types";
import "./date.css";

function Date({ titleCalendar }) {
  return (
    <div className="container-date">
      <label className="label-champs-date" htmlFor="start">
        {titleCalendar ?? "Aucune valeur n'est renseignée."}
      </label>

      <input className="date-background" type="date" id="start" name="date" />
    </div>
  );
}

Date.propTypes = {
  titleCalendar: PropTypes.string.isRequired,
};

export default Date;
