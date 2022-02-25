import "./styles/app.scss";
import logo from "./logo.png";
import twitter from "./imgs/twitter.png";
import youtube from "./imgs/you.png";
import insta from "./imgs/insta.png";
import tik from "./imgs/tik2.png";
import twitch from "./imgs/twitch.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} />
        <div className="socials">
          <a href="https://twitter.com/NoLieBigfacts">
            <img src={twitter} />
          </a>
          <a href="https://www.youtube.com/channel/UCLpmWRfga-0AHqp-fHYDdDg">
            <img src={youtube} />
          </a>
          <a href="https://www.instagram.com/noliebigfacts/">
            <img src={insta} />
          </a>
          <a href="https://www.tiktok.com/@noliebigfacts">
            <img src={tik} />
          </a>
          <a href="https://www.twitch.tv/noliebigfacts">
            <img src={twitch} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
