import React from "react";
import "./Comedian.scss";

const Comedian = ({ data, onVote }) => {
  return (
    <div
      className="comedian card m-2 col-sm-4 col-md-2 stretched-link p-0"
      onClick={onVote}
      id={data.name}
    >
      <img className="card-img-top" src={data.img} alt={data.name} />
      <div className="card-body">
        <span className="card-text">{data.name}</span>
      </div>
    </div>
  );
};

export default Comedian;
