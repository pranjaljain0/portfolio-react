import React from "react";
import Typed from "react-typed";

function LeftText() {
  return (
    <div className="leftText">
      <div className="flex-fix">
        <h2>Hi, </h2>
        <span className="preTitle">I am </span>
        <h1 className="name_big">Pranjal Jain</h1>
        <p className="animated_text">
          <Typed
            strings={["Test 4", "Test 3", "Test 2", "Test 1"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </p>
      </div>
    </div>
  );
}

export default LeftText;
