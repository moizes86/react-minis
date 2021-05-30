import React, { useState } from "react";
import NumberBtn from "./number-btn.component";
const ChooseANumber = () => {
  let numArr = [...Array(7).keys()];
  numArr.shift();

  const [picked, setPicked] = useState('');

  return (
    <div className="choose-a-number">
      <h1 className="text-center" >Choose A Number</h1>

      <div className="d-flex flex-column align-items-center">
        {numArr.map((num, i) => (
          <div className="row" key={`${num}-${i}`}>
            <NumberBtn btnNumber={num} btnColor={"danger"} setPicked={setPicked} />
            <NumberBtn btnNumber={num * 2} btnColor={"success"} setPicked={setPicked} />
          </div>
        ))}

        <p>You Clicked {picked}</p>
      </div>
    </div>
  );
};

export default ChooseANumber;
