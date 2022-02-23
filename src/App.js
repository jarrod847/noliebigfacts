import "./styles/app.scss";
import logo from "./logo.png";
import twitter from "./imgs/twitter.png";
import youtube from "./imgs/you.png";
import insta from "./imgs/insta.png";
import tik from "./imgs/tik2.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} />
        <div className="socials">
          <a href="https://twitter.com/SkahillJarrod">
            <img src={twitter} />
          </a>
          <a href="https://www.youtube.com/channel/UCLpmWRfga-0AHqp-fHYDdDg">
            <img src={youtube} />
          </a>
          <a href="">
            <img src={insta} />
          </a>
          <a>
            <img src={tik}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
