import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import NoteBoard from "./components/notes-board/notes-board.component";
import reportWebVitals from "./reportWebVitals";
import NameList from "./components/name-list/name-list";
import ChooseANumber from "./components/choose-a-number/choose-a-number";
import LoginPage from "./components/login-page/login-page";
import Carousel from './components/carousel/Carousel';
import DiceGame from "./components/dice-game/DiceGame";
import RandomQuoteGenerator from "./components/random-quate-generator/RandomQuateGenerator";
import VotingApp from "./components/voting-app/VotingApp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
      <App />
        <Switch>
          <Route exact path="/note-board">
            <NoteBoard />
          </Route>
          <Route exact path="/name-list">
            <NameList initialNames={['Moshe', 'Dor', 'Ron', 'Liad']} />
            <NameList initialNames={[]} />
          </Route>
          <Route exact path="/choose-a-number">
            <ChooseANumber />
          </Route>
          <Route exact path="/login-page">
            <LoginPage />
          </Route>
          <Route exact path="/carousel">
            <Carousel />
          </Route>
          <Route exact path="/dice-game">
            <DiceGame />
          </Route>
          <Route exact path="/random-quote-generator">
            <RandomQuoteGenerator />
          </Route>
          <Route exact path="/voting-app">
            <VotingApp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
