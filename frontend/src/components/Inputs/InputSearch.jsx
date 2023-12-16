import "./input-search.css";

function inputsearch() {
  return (
    <div>
      <div className="background-search">
        <label htmlFor="searchInput">Search:</label>
        <input type="text" id="searchInput" name="searchInput" />
      </div>
    </div>
  );
}

export default inputsearch;
