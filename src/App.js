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
        <main>
          <Dictionary defaultKeyword="rain" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by C.Sneed and is {""}
            <a
              href="https://app.netlify.com/sites/luminous-truffle-31d4d9/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              open-sourced on Github{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Cjenae7/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
