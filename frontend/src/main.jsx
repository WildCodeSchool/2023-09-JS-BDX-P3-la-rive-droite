import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Import des composants pour les routes.
import App from "./App";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import Home from "./pages/HomeOffer/Home";
import UserProfileModel from "./pages/ProfileUser/UserProfileModel";
import CreateCV from "./pages/CV/CreateCV";
import AddExperience from "./pages/Experience/AddExperience";
import AddFormation from "./pages/Formation/AddFormation";
import Offer from "./pages/Offer/Offer";
import History from "./pages/Historique/History";
import Favoris from "./pages/Favoris/Favoris";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/profil/history",
        element: <History />,
      },
      {
        path: "/profil/favorite",
        element: <Favoris />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/edit-profil",
        element: <UserProfileModel />,
        children: [
          {
            path: "/edit-profil/cv",
            element: <CreateCV />,
          },
          {
            path: "/edit-profil/experience",
            element: <AddExperience />,
          },
          {
            path: "/edit-profil/formation",
            element: <AddFormation />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
