import React from "react";

const NumberBtn = ({ btnNumber, btnColor, setPicked }) => {
  function handleClick() {
    setPicked(btnNumber);
  }
  return (
    <button type="button" className={`btn btn-outline-${btnColor} px-5 py-2 m-2`} onClick={handleClick}>
      {btnNumber}
    </button>
  );
};

export default NumberBtn;
