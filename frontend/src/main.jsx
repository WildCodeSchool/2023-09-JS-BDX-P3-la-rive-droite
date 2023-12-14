import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import des composants pour les routes.
import App from "./App";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import UserProfileModel from "./pages/ProfileUser/UserProfileModel";
import CreateCV from "./pages/CV/CreateCV";
import AddExperience from "./pages/Experience/AddExperience";
import AddFormation from "./pages/Formation/AddFormation";
import History from "./pages/Historique/History";
import JobPosteDelail from "./pages/JobPosteDetail/JobPosteDetail";
import Home from "./pages/Home/Home";
import Favoris from "./pages/Favoris/Favoris";
import ResultatAnnonces from "./pages/ResultatAnnonce/ResultatsAnnonce";
import Search from "./pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/inscription",
        element: <SignIn />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/favoris",
        element: <Favoris />,
      },
      {
        path: "/connexion",
        element: <LogIn />,
      },
      {
        path: "/job",
        element: <JobPosteDelail />,
      },
      {
        path: "/results",
        element: <ResultatAnnonces />,
      },
      {
        path: "/search",
        element: <Search />,
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
      {
        path: "/historique",
        element: <History />,
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
