import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import "../../components/Boutons/button-maxi.css";
import "./read-offer.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function ReadOffer() {
  const [offer, setOffer] = useState([]);
  const [skillsOffer, setSkillsOffer] = useState([]);
  const { apiService } = useGlobalContext();
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const { id } = useParams();

  useEffect(() => {
    const getOffer = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/offer/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setOffer(data);
        } else {
          console.error("Echec de la récupération des données.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    const getSkillsOffer = async () => {
      try {
        const response = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/offers/${id}/skills`
        );

        setSkillsOffer(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSkillsOffer();
    getOffer();
  }, []);

  return (
    <>
      <HeaderCourt />

      <div className="container-page with-rounded-border offer-card">
        <div>
          <h1 className="title-page">Postuler à l'offre</h1>
        </div>
        <div className="card-container">
          <h3 className="title-offer">{offer.title}</h3>
          <h4 className="company-offer">{offer.company}</h4>
          <p className="type-offer">{offer.type}</p>
          <div className="competence-match-offer">
            {skillsOffer.map((skill) => (
              <p className="skill-offer" key={skill.id}>
                {skill.name}
              </p>
            ))}
          </div>
          <p className="description-word">Missions</p>
          <p className="p-description">{offer.info}</p>

          <p className="sub-title">Lieu :</p>
          <p className="info-offer">{offer.city}</p>

          <p className="sub-title">Profil recherché :</p>
          <p className="info-offer">{offer.search_profile}</p>

          <p className="sub-title">Lieu de travail :</p>
          <p className="info-offer">{offer.work_place}</p>

          <p className="sub-title">Salaire :</p>
          <p className="info-offer">{offer.salary}</p>

          <p className="sub-title">Informations supplémentaires :</p>
          <p className="info-offer">{offer.info}</p>

          <MDBBtn className="submit-btn-maxi" onClick={toggleOpen}>
            POSTULER À L'OFFRE
          </MDBBtn>
        </div>
      </div>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Félicitations !</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleOpen}>
                {" "}
              </MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Votre candidature a bien été reçue par notre équipe. Nous vous
              remercions sincèrement de l'intérêt que vous portez à notre
              entreprise. Soyez assuré(e) que votre profil sera soigneusement
              évalué par notre équipe de recrutement. Nous nous efforçons de
              traiter chaque demande avec la plus grande attention
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn className="submit-btn-maxi" onClick={toggleOpen}>
                Ok
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ReadOffer;
