import React from "react";
import MyJumbotron from "../my-jumbotron/my-jumbotron";

const Welcome = () => (
  <div className="welcome text-center">
    <MyJumbotron
      title="Checkout My Work"
      text="Here is some React work made during wecode bootcamp 2021"
      bgColor={"transparent"}
    />
    <div className="smiley ">🙂</div>
  </div>
);
export default Welcome;
