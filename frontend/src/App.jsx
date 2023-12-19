import { Outlet } from "react-router-dom";
import SignContextProvider from "./contexts/SignContext";
import LogContextProvider from "./contexts/LogContext";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <SignContextProvider>
      <LogContextProvider>
        <Navbar />
        <Outlet />
      </LogContextProvider>
    </SignContextProvider>
  );
}
export default App;
