import React from "react";

function Step2(props) {
  return (
    <div>
      <h1> Step 2: What is your preferred TERRAIN?</h1>
      <p>
        <button onClick={props.nextStep}>BEACH</button>
      </p>
      <p>
        <button onClick={props.nextStep}>INLAND</button>
      </p>
      <p>
        <button onClick={props.previousStep}>Previous Step</button>
      </p>
      <p>
        <button onClick={props.nextStep}>Next Step</button>
      </p>
    </div>
  );
}

export default Step2;
