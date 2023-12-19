import { Outlet } from "react-router-dom";
import SignContextProvider from "./contexts/SignContext";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <SignContextProvider>
      <Navbar />
      <Outlet />
    </SignContextProvider>
  );
}
export default App;
