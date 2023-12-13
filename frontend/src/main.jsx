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
