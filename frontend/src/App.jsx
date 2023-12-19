import { Outlet } from "react-router-dom";
import SignContextProvider from "./contexts/SignContext";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import RowDash from "./components/Dashboards/RowDash";

function App() {
  return (
    <SignContextProvider>
      <Navbar />
      <Outlet />
      <RowDash />
    </SignContextProvider>
  );
}
export default App;
