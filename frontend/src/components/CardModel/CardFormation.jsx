import "./card-model.css";
import { format } from "date-fns";
import PropTypes from "prop-types";

function CardFormation({
  id,
  domaine,
  dateBegin,
  dateEnd,
  name,
  level,
  handleCourseDelete,
}) {
  const dateBeginObject = dateBegin ? new Date(dateBegin) : null;
  const dateEndObject = dateEnd ? new Date(dateEnd) : null;
  const formattedDateBegin = dateBeginObject
    ? format(dateBeginObject, "dd/MM/yyyy")
    : "Date début invalide";
  const formattedDateEnd = dateEndObject
    ? format(dateEndObject, "dd/MM/yyyy")
    : "Date fin invalide";

  return (
    <div className="card-container">
      <div className="card-icons">
        <div className="icon-view">
          <button
            className="invisible-button"
            aria-label="toggleFavorite"
            type="button"
            onClick={() => {
              handleCourseDelete(id);
            }}
          >
            <i className="fa-solid fa-trash-can" />
          </button>
        </div>
      </div>
      <h4 className="date-poste">
        {formattedDateBegin} au {formattedDateEnd}
      </h4>
      <h3 className="label-offre ">
        {level} {domaine}
      </h3>

      <p className="entreprise-champs formation ">{name}</p>
    </div>
  );
}
CardFormation.propTypes = {
  id: PropTypes.number.isRequired,
  domaine: PropTypes.string.isRequired,
  dateBegin: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  handleCourseDelete: PropTypes.func.isRequired,
};

export default CardFormation;
