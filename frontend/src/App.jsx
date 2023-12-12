import HeaderLong from "./components/HeaderLong";
import AddDetailsCV from "./components/AddDetailsCV";
import CompetenceSwitch from "./components/CompetenceSwitch";
import Login from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import "./App.css";

import "./style/style_components/default-settings.css";

function App() {
  return (
    <div>
      <HeaderLong />
      <h1>Hello world</h1>
      <AddDetailsCV />
      <CompetenceSwitch />
      <Login />
      <SignIn />
    </div>
  );
}

export default App;
