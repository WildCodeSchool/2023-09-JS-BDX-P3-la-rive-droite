import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";
import CardOffre from "../../components/CardModel/CardOffre";

function ResultatsAnnonces() {
  return (
    <div>
      <HeaderLongResearch
        textTitle="Résultats de"
        textTitle2="vos recherches"
      />
      <div className="container-page">
        <CardOffre />
        <CardOffre />
        <CardOffre />
      </div>
    </div>
  );
}
export default ResultatsAnnonces;
