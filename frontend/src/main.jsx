import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomeOffer/Home";
import ReadOffer from "./pages/Offer/ReadOffer";
import SignIn from "./pages/Connexion/SignIn";
import LogIn from "./pages/Connexion/LogIn";
import History from "./pages/Historique/History";
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
// Import de classe.
import ApiService from "./services/api.service";
// Import Styles.
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import currentUserProfileLoader from "./loaders/current-user-profil.loader";

const apiService = new ApiService();
// const navigate = useNavigate();

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
        loader: async () => {
          try {
            // D'abord, on va chercher le CV de l'utilisateur, ce qui nous intéresse est l'id du CV
            const cvData = await apiService.get(
              `${import.meta.env.VITE_BACKEND_URL}/api/users/6/cvs` // TODO: remplacer le 5 par l'id de l'utilisateur connecté
            );

            // Ensuite, on va chercher les expériences de l'utilisateur via l'id du CV qu'on vient de récupérer
            // le but est de pouvoir faire SELECT * FROM experiences WHERE cv_id = cvData.data.id
            const experienceData = await apiService.get(
              `${import.meta.env.VITE_BACKEND_URL}/api/experiences/by-cv-id/${
                cvData.data.id
              }`
            );
            const courseData = await apiService.get(
              `${import.meta.env.VITE_BACKEND_URL}/api/courses/by-cv-id/${
                cvData.data.id
              }`
            );

            return {
              experiences: experienceData.data,
              courses: courseData.data,
            };
          } catch (err) {
            console.error(err.message);
            return null;
          }
        },
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
        // loader: async () => {
        //   try {
        //     const response = await apiService.get(
        //       `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
        //     );
        //     // return  preloadUser: data ?? null;
        //     // console.log(response.data.is_admin);
        //     if (response.data.is_admin !== 1) {
        //       // console.log("Unauthorized !");
        //       Navigate("/");
        //     }
        //   } catch (err) {
        //     console.error(err.message);
        //     return null;
        //   }
        // },
        children: [
          {
            path: "/dashboard/user",
            element: <Dashboard3 />,
            // loader: async () => {
            //   try {
            //     // GET /api/users
            //     // si ok => renvoir données
            //     // si ko => null
            //   }
            // },
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
