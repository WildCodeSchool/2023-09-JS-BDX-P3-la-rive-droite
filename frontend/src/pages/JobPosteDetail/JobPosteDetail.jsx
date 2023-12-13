import "./job-poste-detail.css";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import ButtonMaxiPink from "../../components/Boutons/ButtonMaxiPink";
import HeaderCourt from "../../components/Headers/HeaderCourt";

function JobPosteDetail() {
  return (
    <>
      <div>
        <HeaderCourt />
      </div>
      <div className="container-page-offre">
        <div>
          <div className="offre-date-container">
            <div className="icon-share">
              <i className="fa-solid fa-arrow-up-from-bracket" />
            </div>
            <h1>Postuler à l’offre</h1>
            <h2>Publiée le 25/10/2023</h2>
          </div>
          <div className="container-offre">
            <div className="title-offre-container">
              <h3 className="title-offre"> Développeur Full-Stack</h3>
              <i className="fa-regular fa-heart" />
            </div>
            <h3 className="name-entreprise"> Agence Idevweb - Bordeaux </h3>
            <div className="type-poste">
              {" "}
              <span> CDI</span>
            </div>
            <h3 className="detail-title-offre"> Missions</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              necessitatibus obcaecati praesentium nihil minima ut numquam
              molestiae nostrum, accusantium, repellat doloribus amet autem
              dolores quas odio? Maiores quae consectetur quisquam. Dolorum qui
              reprehenderit ratione unde. Deserunt illum, ex voluptatibus vitae
              esse quia, excepturi eius, nam molestiae quae et? Quia sed
              sapiente laborum repudiandae exercitationem facilis modi velit.
              Distinctio, odit dicta?
            </p>
            <h3 className="detail-title-offre"> Profil recherché</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              sapiente magnam odio totam officiis incidunt quibusdam provident
              animi dolorum inventore! Veniam incidunt ipsa quia et illum
              doloribus nihil perspiciatis nisi!
            </p>
            <h3 className="detail-title-offre"> Lieux de travail</h3>
            <p> Bordeaux - Pas de télétravail</p>
            <h3 className="detail-title-offre"> Salaire</h3>
            <p> Selon le profil</p>
            <h3 className="detail-title-offre"> Infos supplémentaires</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              rerum quae laudantium voluptas molestiae commodi eligendi,
              corrupti consequatur velit quibusdam inventore facilis hic
              perspiciatis. Vero cum in maxime fuga voluptatibus?
            </p>
            <ButtonMaxi />
            <ButtonMaxiPink />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPosteDetail;
