import "./checkbox-conditions.css";

function CheckboxCondition() {
  return (
    <div>
      <div className="container-checkbox">
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">Case à cocher pour valider</label>
      </div>
    </div>
  );
}
export default CheckboxCondition;
