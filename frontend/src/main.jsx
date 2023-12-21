import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomeOffer/Home";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import History from "./pages/Historique/History";
import Favoris from "./pages/Favoris/Favoris";
import UserProfileModel from "./pages/ProfileUser/UserProfileModel";
import CreateCV from "./pages/CV/CreateCV";
import AddExperience from "./pages/Experience/AddExperience";
import AddFormation from "./pages/Formation/AddFormation";
import Dashboard1 from "./pages/Dashboard/Dashboard1";
import Dashboard2 from "./pages/Dashboard/Dashboard2";
import Offer from "./pages/Offer/Offer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import AdminContextProvider from "./contexts/AdminContext";
import SignContextProvider from "./contexts/SignContext";
import LogContextProvider from "./contexts/LogContext";
import LocalStorageContextProvider from "./contexts/LocalStorageContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LocalStorageContextProvider>
        {/* <UserContext> */}
        <App />
        {/* </UserContext> */}
      </LocalStorageContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: (
          <SignContextProvider>
            <SignIn />
          </SignContextProvider>
        ),
      },
      {
        path: "/login",
        element: (
          <LogContextProvider>
            <LogIn />
          </LogContextProvider>
        ),
      },
      {
        path: "/profile/history",
        element: <History />,
      },
      {
        path: "/profile/favorite",
        element: <Favoris />,
      },
      {
        path: "/edit-profile",
        element: <UserProfileModel />,
        children: [
          {
            path: "/edit-profile/cv",
            element: <CreateCV />,
          },
          {
            path: "/edit-profile/experience",
            element: <AddExperience />,
          },
          {
            path: "/edit-profile/formation",
            element: <AddFormation />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <AdminContextProvider>
            <Dashboard1 />
          </AdminContextProvider>
        ),
        children: [
          {
            path: "/dashboard/candidates",
            element: <Dashboard2 />,
          },
          {
            path: "/dashboard/offer",
            element: <Offer />,
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
