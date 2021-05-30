import React, { useState, useEffect } from "react";
import NoteComponent from "./note/note";

const NoteBoard = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("note-board-background-img");
    return () => {
      document.querySelector("body").classList.remove("note-board-background-img");
    };
  });

    class Note {
      constructor(textarea, date, time) {
        this.textarea = textarea;
        this.date = date;
        this.time = time;
      }
    }

  const [textarea, setTextarea] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notesArr, setNotesArr] = useState([new Note('Take the dog out for a walk', '10-10-2020', '17:00')]);
  const addNote = (note) => {
    const newNotes = [...notesArr, note];
    setNotesArr(newNotes);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(new Note(textarea, date, time));
    setTextarea("");
    setDate("");
    setTime("");
  };



  return (
    <>
      <div className="row justify-content-center notes-container">
        <form
          className="col-sm-12 col-md-5 d-flex flex-column align-items-sm-center text-center needs-validation"
          onSubmit={handleSubmit}
        >
          <div className="form-group w-100">
            <textarea
              className="form-control"
              id="note-textarea"
              rows="3"
              required
              value={textarea}
              onChange={(e) => {
                setTextarea(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group ">
            <label className="font-weight-bold mr-4" htmlFor="note-date">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="note-date"
              required
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label className="font-weight-bold mr-4" htmlFor="note-time">
              Time
            </label>
            <input
              type="time"
              className="form-control "
              id="note-time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="row notes-container row-wrap justify-content-center justify-content-md-start mt-5 p-1">
        {notesArr.map((note, i) => (
          <NoteComponent key={i} props={note} />
        ))}
      </div>
    </>
  );
};

export default NoteBoard;
