import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import des composants pour les routes.
import App from "./App";
import CreateCV from "./pages/CV/CreateCV";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import ResultatsAnnonce from "./pages/ResultatAnnonce/ResultatsAnnonce";
import UserProfileModel from "./pages/ProfileUser/UserProfileModel";
import AddExperience from "./pages/Experience/AddExperience";
import AddFormation from "./pages/Formation/AddFormation";

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
        path: "/connexion",
        element: <LogIn />,
      },
      {
        path: "/ajouter-formation",
        element: <AddFormation />,
      },
      {
        path: "/edit-profil",
        element: <UserProfileModel />,
      },
      {
        path: "/cv",
        element: <CreateCV />,
      },
      {
        path: "/experience",
        element: <AddExperience />,
      },
      {
        path: "/result-annonce",
        element: <ResultatsAnnonce />,
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
