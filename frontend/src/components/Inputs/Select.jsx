import "./select.css";

function Select() {
  return (
    <div className="container-select">
      <label className="label-select" htmlFor="contrat-select">
        Type de contrat
      </label>

      <select className="select-background" name="pets" id="pet-select">
        <option value="">Sélectionner le type de contrat</option>
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
      </select>
    </div>
  );
}

export default Select;
