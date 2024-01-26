import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./navBar.css";

export default function Navbar() {
  const { user, handleLogout, isAdmin } = useGlobalContext();

  const [openNavColor, setOpenNavColor] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setOpenNavColor(false);
    });
  }, []);

  return (
    <>
      <MDBNavbar expand="lg" dark className="  navbar-bg-color no-shadow ">
        <MDBContainer className="container" fluid>
          <div className="container-nav">
            <MDBNavbarBrand href="#">
              <span className="navbar-big-logo">
                <h4 className="navbar-logo-title">EXTERNATIC</h4>
              </span>
            </MDBNavbarBrand>

            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavColor(!openNavColor)}
            >
              <MDBIcon icon="bars" fas className="navbar-burger-icon" />
            </MDBNavbarToggler>

            <MDBCollapse open={openNavColor} navbar>
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <Link to="/">
                  <span className="active navbar-link">Accueil</span>
                </Link>
                {user ? (
                  <Link to="/edit-profile">
                    <span className="navbar-link">Mon Compte</span>
                  </Link>
                ) : null}
                {/* <Link to="/profile/favorite">
                  <span className="navbar-link">Favoris</span>
                </Link> */}
                {user ? (
                  <Link to="/edit-profile/formation">
                    <span className="navbar-link">Mes Formations</span>
                  </Link>
                ) : null}
                {user ? (
                  <Link to="/edit-profile/experience">
                    <span className="navbar-link">Mes Expériences</span>
                  </Link>
                ) : null}
                {isAdmin ? (
                  <Link to="/dashboard">
                    <span className="navbar-link">Espace admin</span>
                  </Link>
                ) : null}
                <div className="btn-nav">
                  {user ? (
                    <div>
                      <Link
                        to="/"
                        className="navbar-link"
                        onClick={handleLogout}
                      >
                        Se déconnecter
                      </Link>
                      <Link className="navbar-link profile" to="/edit-profile">
                        {" "}
                        {/* <i class="fa-solid fa-user"></i> */}
                        Hello {user.firstname}
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">
                        <span className="navbar-link">Se connecter</span>
                      </Link>
                      <Link to="/signin">
                        <span className="navbar-link">S'inscrire</span>
                      </Link>
                    </>
                  )}
                </div>
              </MDBNavbarNav>
            </MDBCollapse>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <br />
    </>
  );
}
