import React, { useState } from "react";
import NameListForm from "./sub-components/name-list-form";
import NameListUl from "./sub-components/name-list-ul";
import "./name-list.scss";

const NameList = () => {
  const [enteredLast, setEnteredLast] = useState("Enter Name And See What Happens");
  const [names, setNames] = useState(['Moshe', 'Dor', 'Yakov']);

  function removeName(e) {
    const name = e.target.id;
    const nameToRemoveIndex = names.indexOf(name);
    names.splice(nameToRemoveIndex, 1);
    setNames([...names]);
  }

  function addName(newName) {
    setNames([...names, newName]);
    setEnteredLast(newName);
  }

  return (
    <div className="name-list">
      <h5 className="ml-3">{enteredLast}</h5>
      <NameListForm addName={addName} setEnteredLast={setEnteredLast} />
      <NameListUl names={names} removeName={removeName} />
    </div>
  );
};

export default NameList;
