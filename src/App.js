import logo from "./SheCodes.jpg";

import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid " alt="SheCodes logo" />
        </header>

        <Dictionary defaultKeyword="manifest" />

        <footer className="text-center">
          <small>
            Coded by C.Sneed and is {""}
            <a
              href="https://github.com/Cjenae7/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              open-sourced on Github{" "}
            </a>{" "}
            and{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
