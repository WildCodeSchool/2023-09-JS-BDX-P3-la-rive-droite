import PropTypes from "prop-types";
import "./title-dashboard.css";

function TitleDashboard({ labelDash, labelDash2, labelDash3, labelDash4 }) {
  return (
    // <thead>
    <tr /* className="title-container" */>
      <th scope="col" /* className="title-dash" */>{labelDash}</th>
      <th scope="col" /* className="title-dash" */>{labelDash2}</th>
      <th scope="col" /* className="title-dash" */>{labelDash3}</th>
      <th scope="col" /* className="title-dash" */>{labelDash4}</th>
    </tr>
    // </thead>
  );
}
TitleDashboard.propTypes = {
  labelDash: PropTypes.string.isRequired,
  labelDash2: PropTypes.string.isRequired,
  labelDash3: PropTypes.string.isRequired,
  labelDash4: PropTypes.string.isRequired,
};

export default TitleDashboard;
