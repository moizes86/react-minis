import React from "react";

const Dice = ({ dice, handleSelectDice,selected,rolled }) => {
  
  return (
    <div>
      <img
        src={dice.dice}
        className={`dice ${dice.id===selected? 'selected' : null}`}
        id={dice.id}
        onClick={handleSelectDice}
      />
    </div>
  );
};

export default Dice;
