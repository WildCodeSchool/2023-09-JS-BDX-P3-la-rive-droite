import HeaderLongTitreSsTitre from "../../components/Headers/HeaderLongTitreSsTitre";
import CardFavoris from "../../components/CardModel/CardFavoris";

function Favoris() {
  return (
    <>
      <HeaderLongTitreSsTitre />
      <div className="container-page">
        <CardFavoris />
        <CardFavoris />
        <CardFavoris />
        <CardFavoris />
        <CardFavoris />
        <CardFavoris />
      </div>
    </>
  );
}

export default Favoris;
