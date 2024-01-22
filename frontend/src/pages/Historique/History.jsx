import HeaderLongTitreSsTitre from "../../components/Headers/HeaderLongTitreSsTitre";
import CardModel from "../../components/CardModel/CardHistory";

function History() {
  return (
    <>
      <HeaderLongTitreSsTitre title="Candidatures" subTitle="Historique" />
      <div className="container-page">
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
      </div>
    </>
  );
}

export default History;
