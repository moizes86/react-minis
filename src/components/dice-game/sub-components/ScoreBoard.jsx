import React from "react";
import "./ScoreBoard.scss";

const ScoreBoard = ({ score }) => {
  const myClass = " d-flex flex-column justify-content-between mx-2";
  return (
    <div className="score-board my-4 bg-dark text-light p-3 text-center">
      <div className="d-flex">
        <div className={myClass}>
          <p>Hits</p>
          <span>{score.hits}</span>
        </div>
        <div className={myClass}>
          <p>Attempts</p>
          <span>{score.attempts}</span>
        </div>
        <div className={myClass}>
          <p>Success Rate</p>
          {score.attempts ? (
            <span>{Math.floor((score.hits / score.attempts) * 100)}%</span>
          ) : (
            <span>--</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
