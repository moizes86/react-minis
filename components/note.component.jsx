import React from "react";
import './note.style.css'

const NoteComponent = (props) => {
  const {textarea, date, time} = props.props
  return (
    
      <div className="col-md-12 note p-4 note">
        <p className="mt-3">{textarea}</p>
        <p className="">{date}</p>
        <p className="">{time}</p>
      </div>
    
  );
};

export default NoteComponent;
