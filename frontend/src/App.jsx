import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default App;
