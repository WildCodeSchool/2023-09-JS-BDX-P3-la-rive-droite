import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import RowDash from "./components/Dashboards/RowDash";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <RowDash />
    </>
  );
}
export default App;
