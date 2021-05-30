import React, { useState, useEffect } from "react";
import Comedian from "./sub-components/Comedian";
import DisplayVotesPercentage from "./sub-components/DisplayVotesPercentage";
import "./VotingApp.scss";

const VotingApp = () => {
  const comedians = [
    {
      name: "Bill Burr",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bill_Burr_by_Gage_Skidmore.jpg/800px-Bill_Burr_by_Gage_Skidmore.jpg",
    },
    {
      name: "Dave Chappelle",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dave_Chappelle_%2842791297960%29_%28cropped%29.jpg/800px-Dave_Chappelle_%2842791297960%29_%28cropped%29.jpg",
    },
    {
      name: "Joe Rogan",
      img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTkr22wOKdSO2Z6P1tSJbv6_nKp6s0yVeguLDH7i5ivUaTDwJIaOMaFatYsmWtQ",
    },
    {
      name: "Jerry Seinfeld",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jerry_Seinfeld_2016_-_2.jpg/1200px-Jerry_Seinfeld_2016_-_2.jpg",
    },
  ];
  const [votes, setVotes] = useState({ totalVotes: 0 });

  function onVote(e) {
    const comedian = e.target.id;
    setVotes({
      ...votes,
      totalVotes: ++votes.totalVotes,
      [comedian]: !votes[comedian] ? 1 : (votes[comedian] += 1),
    });
  }

  return (
    <div className="voting-app ">
      <div className="header text-center text-dark mb-3">
        <h1>Click on Your Favorite Comedian</h1>
        <p>If they're not on this list - you got work to do</p>
      </div>
      <div className="comedians d-flex justify-content-center flex-wrap">
        {comedians.map((comedian) => (
          <Comedian key={comedian.name} data={comedian} onVote={onVote} />
        ))}
      </div>

      <div className="display-votes container bg-light  col-md-7 col-lg-5">
        <div className="d-flex justify-content-center align-items-end h-100 pt-3 ">
          {comedians.map((comedian, i) => (
            <DisplayVotesPercentage key={i} votes={votes} comedian={comedian} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VotingApp;
