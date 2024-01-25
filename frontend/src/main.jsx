import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomeOffer/Home";
import ReadOffer from "./pages/Offer/ReadOffer";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import History from "./pages/Historique/History";
import currentUserProfileLoader from "./loaders/current-user-profil.loader";
import Favoris from "./pages/Favoris/Favoris";
import UserProfileModel from "./pages/ProfileUser/UserProfileModel";
import AddExperience from "./pages/Experience/AddExperience";
import AddFormation from "./pages/Formation/AddFormation";
import Dashboard1 from "./pages/Dashboard/Dashboard1";
import Dashboard2 from "./pages/Dashboard/Dashboard2";
import Dashboard3 from "./pages/Dashboard/Dashboard3";
import AddOffer from "./pages/Offer/AddOffer";
import EditOffer from "./pages/Offer/EditOffer";
// Import Contexts.
import AdminContextProvider from "./contexts/AdminContext";
import SignContextProvider from "./contexts/SignContext";
import LogContextProvider from "./contexts/LogContext";
import GlobalContextProvider from "./contexts/GlobalContext";
import UserContextProvider from "./contexts/UserContext";
// Import de loaders.
import currentUserProfileLoader from "./loaders/current-user-profil.loader";
import currentRequestsUserProfile from "./loaders/current-requests-profil.loader";
import currentAdmin from "./loaders/current-admin.loader";
// Import de classe.
import ApiService from "./services/api.service";
// Import Styles.
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const apiService = new ApiService();

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => currentUserProfileLoader(apiService),
    element: (
      <GlobalContextProvider apiService={apiService}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </GlobalContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/offer/:id",
        element: <ReadOffer />,
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
        element: (
          <SignContextProvider>
            <UserProfileModel />
          </SignContextProvider>
        ),
        children: [
          {
            path: "/edit-profile/experience",
            element: <AddExperience />,
          },
          {
            path: "/edit-profile/experience/:id/edit",
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
        loader: async () => currentAdmin(apiService),
        children: [
          {
            path: "/dashboard/user",
            element: <Dashboard3 />,
          },
          {
            path: "/dashboard/candidates",
            element: <Dashboard2 />,
          },
          {
            path: "/dashboard/offer",
            element: <AddOffer />,
          },
          {
            path: "/dashboard/edit-offer/:id",
            element: <EditOffer />,
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
