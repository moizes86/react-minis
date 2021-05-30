import React from "react";
import AppLiLink from "./components/app-li-link/app-li-link";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./App.scss";

function App() {
  const history = useHistory();
  const location = useLocation();
  const links = [
    { text: "Note Board", url: "note-board" },
    { text: "Name List", url: "name-list" },
    { text: "Choose A Number", url: "choose-a-number" },
    { text: "Login Page", url: "login-page" },
    { text: "Carousel", url: "carousel" },
    { text: "Dice Game", url: "dice-game" },
    { text: "Random Quote Generator", url: "random-quote-generator" },
    { text: "Voting App", url: "voting-app" },
  ];

  return (
    <div className="App">
      <div className="py-3">
        <h1 className="text-center my-link mb-4" onClick={() => history.push("/")}>
          React Projects
        </h1>

        <div className="d-flex flex-wrap justify-content-center mb-3">
          {links.map((link, i) => (
            <AppLiLink linkText={link.text} linkUrl={link.url} key={i} />
          ))}
        </div>

        {location.pathname === "/" && <div className="smiley ">🙂</div>}
      </div>
    </div>
  );
}

export default App;
