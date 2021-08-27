import React from "react";

function Step4(props) {
  return (
    <div>
      <h1> Step 4: Preferred place to stay?</h1>
      <p>
        <button onClick={props.nextStep}>HOTEL</button>
      </p>
      <p>
        <button onClick={props.nextStep}>HOSTEL</button>
      </p>
      <p>
        <button onClick={props.nextStep}>B\&B</button>
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

export default Step4;
