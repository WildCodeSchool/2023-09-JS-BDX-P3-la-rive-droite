import CardOffre from "../../components/CardModel/CardOffre";
import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";

function Home() {
  return (
    <>
      <HeaderLongResearch textTitle="Bienvenue sur" textTitle2="nos offres" />
      <div className="container-page">
        <h2>Les offres qui matchent !</h2>
        <CardOffre />
        <CardOffre />
        <CardOffre />
      </div>
    </>
  );
}
export default Home;
