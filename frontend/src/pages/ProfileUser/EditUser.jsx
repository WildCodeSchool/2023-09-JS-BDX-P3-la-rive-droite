import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import HeaderCourt from "../../components/Headers/HeaderCourt";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Select from "../../components/Inputs/Select";
import Input from "../../components/Inputs/Input";
import CompetenceSwitch from "../../components/Competence Switch/CompetenceSwitch";
// Import de Context.
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "../Offer/add-offer.css";

function EditUser({ fromDashboard }) {
  const navigate = useNavigate();
  const {
    user: currentUser,
    apiService,
    errorMsg,
    setErrorMsg,
    succesMsg,
    setSuccesMsg,
    msgContent,
    setMsgContent,
    handleChange,
    isAdmin,
  } = useGlobalContext();
  const [user, setUser] = useState([]);
  const [allCompetences, setAllCompetences] = useState([]);
  const [selectedCompetences, setSelectedCompetences] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (currentUser.id !== +id) {
      navigate("/profile");
    }
    const getUser = async () => {
      try {
        const { data } = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`
        );
        if (data) {
          // console.log(data);
          setUser(data);
          setSelectedCompetences(data.competences);
        } else {
          console.error("Echec de la récupération des données.");
          navigate("/profile");
        }
      } catch (err) {
        console.error(err);
      }
    };

    const getAllCompetences = async () => {
      try {
        const { data } = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/skills`
        );
        setAllCompetences(data);
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
    getAllCompetences();
  }, []);

  const handleCheckboxSwitch = async (competence) => {
    const isCompetenceSelected = selectedCompetences.some(
      (comp) => comp.id === competence.id
    );
    if (isCompetenceSelected) {
      const updatedCompetences = selectedCompetences.filter(
        (comp) => comp.id !== competence.id
      );
      setSelectedCompetences(updatedCompetences);
    } else {
      setSelectedCompetences((prevCompetences) => [
        ...prevCompetences,
        competence,
      ]);
    }
  };

  const postEditUser = async () => {
    try {
      await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}/set/skills`,
        { competences: selectedCompetences.map((c) => c.id) }
      );

      const infoUser = await apiService.update(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/edit/${user.id}`,
        user
      );
      setUser(infoUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditUser = () => {
    if (
      user.lastName === "" ||
      user.firstName === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.address === ""
    ) {
      setErrorMsg(true);
      setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        setErrorMsg(false);
      }, 2000);
    } else {
      postEditUser();
      setMsgContent("Votre profil a été modifié avec ");
      setSuccesMsg(true);
      setTimeout(() => {
        setSuccesMsg(false);
        if (fromDashboard) {
          navigate("/dashboard/user");
        } else {
          navigate("/profile");
        }
      }, 2000);
    }
  };

  return (
    <div>
      <HeaderCourt />
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Modifier votre profil</h1>

          {isAdmin ? (
            <div>
              <h2>ID User = {user.id}</h2>
              <Select
                titleSelect="Administrateur *"
                fieldName="is_admin"
                handleChange={(event) =>
                  handleChange(setUser, "is_admin", event)
                }
              >
                <option value={0} selected={user.is_admin === 0}>
                  False
                </option>
                <option value={1} selected={user.is_admin === 1}>
                  True
                </option>
              </Select>
            </div>
          ) : null}

          <Input
            titleInput="Nom *"
            holderText={user.lastname}
            fieldName="lastname"
            inputType="text"
            valueInput={user}
            handleChange={(event) => handleChange(setUser, "lastname", event)}
          />
          <Input
            titleInput="Prénom *"
            holderText={user.firstname}
            fieldName="firstname"
            inputType="text"
            valueInput={user}
            handleChange={(event) => handleChange(setUser, "firstname", event)}
          />
          <Input
            titleInput="E-mail *"
            holderText={user.email}
            fieldName="email"
            inputType="text"
            valueInput={user}
            handleChange={(event) => handleChange(setUser, "email", event)}
          />
          <Input
            titleInput="Numéro de téléphone *"
            holderText={user.phone}
            fieldName="phone"
            inputType="text"
            valueInput={user}
            handleChange={(event) => handleChange(setUser, "phone", event)}
          />
          <Input
            titleInput="Adresse *"
            holderText={user.address}
            fieldName="address"
            inputType="text"
            valueInput={user}
            handleChange={(event) => handleChange(setUser, "address", event)}
          />
        </div>
      </div>
      <div className="container-page  with-rounded-border">
        <div className="container-switch">
          <h2 className="label-champs">Cochez vos compétences *</h2>
          {allCompetences.map((competence) => {
            return (
              <CompetenceSwitch
                key={competence.id}
                textCompetence={competence.name.toUpperCase()}
                fieldName={competence.name}
                isChecked={selectedCompetences?.find(
                  (c) => competence.id === c.id
                )}
                handleChange={() => {
                  handleCheckboxSwitch(competence);
                }}
              />
            );
          })}
        </div>
        <div>
          {errorMsg && <ErrorMsg message={msgContent} />}
          {succesMsg && <SuccesMsg message={msgContent} />}
        </div>
        <ButtonMaxi
          textBtn="Modifier l'utilisateur"
          clickFunc={handleEditUser}
        />
      </div>
    </div>
  );
}

export default EditUser;

EditUser.propTypes = {
  fromDashboard: PropTypes.bool,
};

EditUser.defaultProps = {
  fromDashboard: false,
};
