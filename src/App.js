import React, { useState } from "react";
import NoteComponent from "./components/note.component";
import "./App.css";

function App() {
  const [textarea, setTextarea] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [notesArr, setNotesArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = new Note(textarea, date, time);
    setNotesArr((notesArr) => [...notesArr, note]);
  };

  class Note {
    constructor(textarea, date, time) {
      this.textarea = textarea;
      this.date = date;
      this.time = time;
    }
  }

  const x = new Note("as", 12 - 5 - 2021, "19:00");
  notesArr.push(x);

  return (
    <div className="App">
      <div className="container py-3">
        <h1 className="text-center">Note Board</h1>

        <div className="row justify-content-center">
          <form
            className="col d-flex flex-column align-items-sm-center needs-validation"
            onSubmit={handleSubmit}
          >
            <div className="form-group col-12 col-md-7">
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

            <div className="form-group d-flex col-sm-3  ">
              <label className="font-weight-bold mr-4" htmlFor="note-date">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="note-date"
                required
                defaultValue={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>

            <div className="form-group d-flex col-sm-3">
              <label className="font-weight-bold mr-4" htmlFor="note-time">
                Time
              </label>
              <input
                type="time"
                className="form-control "
                id="note-time"
                required
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

        <div className="row notes-container flex-wrap justify-content-center justify-content-md-start mt-5">
          {notesArr.map((note, i) => (
            <NoteComponent props={note} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
