import PropTypes from "prop-types";
import { format } from "date-fns";

import "./card-model.css";

function CardExperience({
  id,
  title,
  company,
  type,
  city,
  dateBegin,
  dateEnd,
  description,
  handleExperienceDelete,
}) {
  const trimText = (chaine, limite) => {
    if (chaine.length <= limite) {
      return chaine;
    }
    return `${chaine.slice(0, limite)}...`;
  };

  const dateBeginObject = new Date(dateBegin);
  const dateEndObject = new Date(dateEnd);

  const formattedDateBegin = format(dateBeginObject, "dd/MM/yyyy");
  const formattedDateEnd = format(dateEndObject, "dd/MM/yyyy");
  return (
    <div className="card-container">
      <div className="card-icons">
        <div className="icon-view">
          <button
            className="invisible-button"
            aria-label="toggleFavorite"
            type="button"
            onClick={() => {
              handleExperienceDelete(id);
            }}
          >
            <i className="fa-solid fa-trash-can" />
          </button>
        </div>
      </div>
      <h4 className="date-poste">
        {formattedDateBegin} au {formattedDateEnd}
      </h4>
      <h3 className="label-offre">{title}</h3>
      <h4 className="entreprise-champs experience">
        {company} {city}
      </h4>
      <h5 className="poste-champs experience">
        {type} - {city}
      </h5>
      <p className="p-description ">{trimText(description, 250)}</p>
    </div>
  );
}
CardExperience.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  dateBegin: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleExperienceDelete: PropTypes.func.isRequired,
};

export default CardExperience;
