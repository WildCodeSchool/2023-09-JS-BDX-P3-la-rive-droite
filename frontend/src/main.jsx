import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import des composants pour les routes.
import App from "./App";
import CreateCV from "./pages/CV/CreateCV";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import UserProfileModel from "./pages/ProfileUser/UserProfileModel";
import AddExperience from "./pages/Experience/AddExperience";

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
      },
      {
        path: "/cv",
        element: <CreateCV />,
      },
      {
        path: "/experience",
        element: <AddExperience />,
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
