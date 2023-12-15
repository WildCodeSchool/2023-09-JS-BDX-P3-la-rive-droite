import CardOffre from "../../components/CardModel/CardOffre";
import HeaderLongTitreSsTitre from "../../components/Headers/HeaderLongTitreSsTitre";

function Home() {
  return (
    <>
      <HeaderLongTitreSsTitre title="Bienvenue" subTitle="Nos offres" />
      <div className="container-page">
        <CardOffre />
        <CardOffre />
        <CardOffre />
      </div>
    </>
  );
}
export default Home;
