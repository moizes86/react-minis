import React, { useState } from "react";

const NameListForm = ({ addName }) => {
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addName(nameInput);
    setNameInput("");
  };

  return (
    <>
      <form
        className="col-sm-6 col-xs-12 col-md-3 needs-validation"
        onSubmit={handleSubmit}
      >
        {/*  */}
        <div className="form-group">
          <label htmlFor="nameInput">New Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter new name..."
            required
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
          />
        </div>

        {/*  */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-submit" disabled={!nameInput}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NameListForm;
