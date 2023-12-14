import { Outlet } from "react-router-dom";
import "./App.css";
import LogContextProvider from "./contexts/LogContext";

function App() {
  return (
    <LogContextProvider>
      <Outlet />
    </LogContextProvider>
  );
}
export default App;
