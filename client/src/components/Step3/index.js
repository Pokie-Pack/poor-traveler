import React from "react";

function Step3(props) {
  return (
    <div>
      <h1> Step 3: Preferred transportation?</h1>
      <p>
        <button onClick={props.nextStep} type="checkbox">
          AIR
        </button>
      </p>
      <p>
        <button onClick={props.nextStep}>CAR</button>
      </p>
      <p>
        <button onClick={props.nextStep}>CRUISE</button>
      </p>
      <p>
        <button onClick={props.nextStep}>RV</button>
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

export default Step3;
