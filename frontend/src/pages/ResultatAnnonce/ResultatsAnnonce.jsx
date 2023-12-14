import CardOffre from "../../components/CardModel/CardOffre";
import HeaderLongTitreSsTitre from "../../components/Headers/HeaderLongTitreSsTitre";

function ResultatAnnonces() {
  return (
    <>
      <HeaderLongTitreSsTitre />
      <div className="container-page">
        <CardOffre />
        <CardOffre />
        <CardOffre />
      </div>
    </>
  );
}
export default ResultatAnnonces;
