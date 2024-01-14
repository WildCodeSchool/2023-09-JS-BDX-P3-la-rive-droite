import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import Home from "./pages/HomeOffer/Home";
import ReadOffer from "./pages/Offer/ReadOffer";
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
import AddOffer from "./pages/Offer/AddOffer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import AdminContextProvider from "./contexts/AdminContext";
import SignContextProvider from "./contexts/SignContext";
import LogContextProvider from "./contexts/LogContext";
import GlobalContextProvider from "./contexts/GlobalContext";
import UserContextProvider from "./contexts/UserContext";
import ApiService from "./services/api.service";

const apiService = new ApiService();

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      try {
        const data = await apiService.get("http://localhost:3310/api/users/me");
        return { preloadUser: data ?? null };
      } catch (err) {
        console.error(err.message);
        return null;
      }
    },

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
            path: "/edit-profile/cv",
            element: <CreateCV />,
            loader: async () => {
              try {
                const data = await axios.get(
                  "http://localhost:3310/api/users/:id/cvs"
                );
                return data;
              } catch (err) {
                console.error(err.message);
                return null;
              }
            },
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
            element: <AddOffer />,
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
