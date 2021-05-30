import React, { useState, useEffect } from "react";
import Messages from "./sub-components/Messsages";
import ScoreBoard from "./sub-components/ScoreBoard";
import dice1 from "./img/dice1.png";
import dice2 from "./img/dice2.png";
import dice3 from "./img/dice3.png";
import dice4 from "./img/dice4.png";
import dice5 from "./img/dice5.png";
import dice6 from "./img/dice6.png";
import "./DiceGame.scss";
import Dice from "./sub-components/Dice";

const DiceGame = () => {
  const defaultMessage = "Pick a number and roll the dice";
  const dices = [
    { id: 1, dice: dice1 },
    { id: 2, dice: dice2 },
    { id: 3, dice: dice3 },
    { id: 4, dice: dice4 },
    { id: 5, dice: dice5 },
    { id: 6, dice: dice6 },
  ];

  const [selected, setSelected] = useState(null);
  const [rolled, setRolled] = useState(null);
  const [message, setMessage] = useState(defaultMessage);
  const [score, setScore] = useState({ hits: 0, attempts: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    afterRoll();
  }, [rolled]);

  function getRandomInt() {
    const min = 1,
      max = 7;
    return Math.floor(Math.random() * (max - min) + min);
  }

  function handleSelectDice(e) {
    setSelected(+e.target.id);
  }

  function handleRoll() {
    if (!selected) {
      setMessage("Please select a dice");
      return;
    }

    const roll = getRandomInt();
    setLoading(true);
    setTimeout(() => {
      setRolled(roll);
      setLoading(false)
    }, 300);
  }

  function afterRoll() {
    if (selected && rolled) {
      setScore({ ...score, attempts: ++score.attempts }); // score attempts++
      if (selected !== rolled) {
        setMessage("Try again");
      } else if (selected === rolled) {
        setScore({ ...score, hits: ++score.hits }); // score attempts++
        setMessage("Nice!");
      }
    }
    setLoading(false);
    setSelected(false);
  }

  function restart() {
    setSelected(null);
    setRolled(null);
    setMessage(defaultMessage);
    setScore({ hits: 0, attempts: 0 });
  }

  return (
    <div className="dice-game ">
      <div className="d-flex justify-content-center mb-5">
        {dices.map((dice, i) => (
          <Dice
            dice={dice}
            key={i}
            handleSelectDice={handleSelectDice}
            selected={selected}
            rolled={rolled}
          />
        ))}
      </div>
      <div className="d-flex flex-column align-items-center">
        <Messages message={message} />
        <div className="roller-dice">{rolled && <img src={dices[rolled - 1].dice} />}</div>
        <button className="btn btn-primary btn-roll" onClick={handleRoll}>
          {loading ? (
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            <span>Roll</span>
          )}
        </button>

        <ScoreBoard score={score} />
        <button className="btn btn-danger" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
