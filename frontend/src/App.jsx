import { Outlet } from "react-router-dom";
import LogContextProvider from "./contexts/LogContext";
import "./App.css";

function App() {
  return (
    <LogContextProvider>
      <Outlet />
    </LogContextProvider>
  );
}
export default App;
