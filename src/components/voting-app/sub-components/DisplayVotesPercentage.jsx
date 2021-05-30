import React from "react";
import "./DisplayVotesPercentage.scss";

const DisplayVotesPercentage = ({ votes, comedian }) => {
  const total = votes.totalVotes ?? 0;
  const comedianVotes = votes[comedian.name] ?? 0;
  const percentage = Math.round((comedianVotes / total) * 100);
  const columnHeight = isNaN(percentage) ? "0%" : `${percentage}%`;
  return (
    <div
      className="display-votes-percentage bg-dark text-light text-center p-3 mx-3 h-100"
      style={{ maxHeight: columnHeight }}
    >
      <span className="percentage-in-column ">{columnHeight}</span>
      <p className="name-under-column text-dark">{comedian.name}</p>
    </div>
  );
};

export default DisplayVotesPercentage;
