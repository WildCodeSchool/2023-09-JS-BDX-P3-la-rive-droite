import "./title-dashboard.css";
import PropTypes from "prop-types";

function TitleDashboard({
  labelDash,
  labelDash2,
  labelDash3,
  labelDash4,
  labelDash5,
  labelDash6,
}) {
  return (
    <div className="title-container">
      <h4 className="title-dash">{labelDash}</h4>
      <h4 className="title-dash">{labelDash2}</h4>
      <h4 className="title-dash">{labelDash3}</h4>
      <h4 className="title-dash">{labelDash4}</h4>
      <h4 className="title-dash">{labelDash5}</h4>
      <h4 className="title-dash-action">{labelDash6}</h4>
    </div>
  );
}
TitleDashboard.propTypes = {
  labelDash: PropTypes.string.isRequired,
  labelDash2: PropTypes.string.isRequired,
  labelDash3: PropTypes.string.isRequired,
  labelDash4: PropTypes.string.isRequired,
  labelDash5: PropTypes.string.isRequired,
  labelDash6: PropTypes.string.isRequired,
};

export default TitleDashboard;
