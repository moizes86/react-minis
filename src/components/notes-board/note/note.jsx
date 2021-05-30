import React from "react";
import "./note.style.scss";

const Note = (props) => {
  const { textarea, date, time } = props.props;
  return (
    <div className="col-md-3 note p-5">
      <p className="mt-4">{textarea}</p>
      <p className="">{date}</p>
      <p className="">{time}</p>
    </div>
  );
};

export default Note;
