import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonMaxi from "../../components/Boutons/ButtonMaxi";
import Select from "../../components/Inputs/Select";
import Input from "../../components/Inputs/Input";
import HeaderCourt from "../../components/Headers/HeaderCourt";
// Import de Context.
import { useGlobalContext } from "../../contexts/GlobalContext";

// Import messages d'erreurs.
import ErrorMsg from "../../components/Alertes Messages/ErrorMsg";
import SuccesMsg from "../../components/Alertes Messages/SuccesMsg";
// Import styles.
import "../Offer/add-offer.css";

function EditUser() {
  // const { addOffer, setAddOffer } = useAdminContext();

  const globalContext = useGlobalContext();

  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const response = await globalContext.apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`
      );
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleEditUser = () => {
    if (
      user.title === "" ||
      user.company === "" ||
      user.type === "" ||
      user.city === "" ||
      user.mission === "" ||
      user.search_profile === "" ||
      user.work_place === "" ||
      user.salary === "" ||
      user.info === "" ||
      user.email === ""
    ) {
      globalContext.setErrorMsg(true);
      globalContext.setMsgContent("Veuillez remplir tous les champs");
      setTimeout(() => {
        globalContext.setErrorMsg(false);
      }, 4000);
    } else {
      const updateUser = async () => {
        globalContext.apiService.update(
          `${import.meta.env.VITE_BACKEND_URL}/api/edit-user/${id}`,
          user
          // id
        );
      };

      updateUser();
      globalContext.setMsgContent("L'offre à été ajouté avec");
      globalContext.setSuccesMsg(true);
      setTimeout(() => {
        globalContext.setSuccesMsg(false);
      }, 4000);
    }
  };

  useEffect(() => {
    globalContext.unauthorized();
    fetchUser();
  }, []);

  return (
    <div>
      <div className="page-offer">
        <HeaderCourt />
        <div className="container-page with-rounded-border">
          <h1>Modifier cet utilisateur.</h1>
          <h2>ID User = {id}</h2>
          <Select
            titleSelect="Administrateur *"
            fieldName="is_admin"
            handleChange={(event) =>
              globalContext.handleChange(setUser, "is_admin", event)
            }
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </Select>
          <Input
            titleInput="Nom *"
            holderText={user.lastname}
            fieldName="lastname"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "lastname", event)
            }
          />
          <Input
            titleInput="Prénom *"
            holderText={user.firstname}
            fieldName="firstname"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "firstname", event)
            }
          />
          <Input
            titleInput="E-mail *"
            holderText={user.email}
            fieldName="email"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "email", event)
            }
          />
          <Input
            titleInput="Mot de passe *"
            holderText="*************"
            fieldName="work_place"
            inputType="password"
            valueInput={user.lastname}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "password", event)
            }
          />
          <Input
            titleInput="Numéro de téléphone *"
            holderText={user.phone}
            fieldName="phone"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "phone", event)
            }
          />
          <Input
            titleInput="Adresse *"
            holderText={user.address}
            fieldName="address"
            inputType="text"
            valueInput={user}
            handleChange={(event) =>
              globalContext.handleChange(setUser, "address", event)
            }
          />
          <div>
            {globalContext.errorMsg && (
              <ErrorMsg message={globalContext.msgContent} />
            )}
            {globalContext.succesMsg && (
              <SuccesMsg message={globalContext.msgContent} />
            )}
          </div>
          <ButtonMaxi
            textBtn="Modifier l'utilisateur."
            clickFunc={handleEditUser}
          />
        </div>
      </div>
    </div>
  );
}

export default EditUser;