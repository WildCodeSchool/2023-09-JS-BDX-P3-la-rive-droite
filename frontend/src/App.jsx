import { Outlet } from "react-router-dom";
import SignContextProvider from "./contexts/SignContext";
import "./App.css";

function App() {
  return (
    <SignContextProvider>
      <Outlet />
    </SignContextProvider>
  );
}
export default App;
