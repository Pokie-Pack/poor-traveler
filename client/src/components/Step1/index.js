import React from "react";

function Step1(props) {
  return (
    <div class="container">
      <h1> Step 1: Click your preferred CLIMATE please</h1>
      <p1>
        <buttonWarm onClick={props.nextStep}>WARM 🔥</buttonWarm>
      </p1>
      <p2>
        <buttonChilly onClick={props.nextStep}>CHILLY 🧊</buttonChilly>
      </p2>

      <p3>
        <button onClick={props.nextStep}>Next Step</button>
      </p3>
    </div>
  );
}

export default Step1;
