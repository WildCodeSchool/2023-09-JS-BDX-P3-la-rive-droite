import "../style/style_components/input.css";

function Input() {
  return (
    <div className="container-input">
      <form>
        <div className="champs-form">
          <div>
            <label className="label-champs" htmlFor="name">
              Nom de l'input
            </label>
          </div>
          <div>
            <input
              className="background-input"
              type="text"
              id="name"
              placeholder="Texte du placeholder"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Input;
