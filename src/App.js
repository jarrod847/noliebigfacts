import "./styles/app.scss";
import logo from "./logo.png";
import Socials from "./Components/socials";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} />
        <Socials />
      </div>
    </div>
  );
}

export default App;
