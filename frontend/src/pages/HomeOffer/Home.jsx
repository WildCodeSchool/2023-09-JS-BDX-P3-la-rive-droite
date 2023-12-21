import CardOffre from "../../components/CardModel/CardOffre";
import HeaderLongResearch from "../../components/Headers/HeaderLongResearch";
import { useLocalStorageContext } from "../../contexts/LocalStorageContext";

function Home() {
  const { getItemInLS } = useLocalStorageContext();
  const offers = getItemInLS("Offer");
  return (
    <>
      <HeaderLongResearch textTitle="Bienvenue sur" textTitle2="nos offres" />
      <div className="container-page">
        <h2>Les offres qui matchent !</h2>
        <CardOffre />
        <CardOffre />
        <CardOffre />
        {offers.map((offer, key) => (
          <div key={key.id}>
            <h1> LA NOUVELLE OFFRE : {offer.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;
