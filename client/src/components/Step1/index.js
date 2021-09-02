import React from "react";
import RadioButtons from "../RadioButtons";

function Step1(props) {
  return (
    <div className="container">
      <h1> Step 1: Click your preferred CLIMATE please</h1>
      <RadioButtons
        name="climate"
        options={[
          { value: "Warm",
           label: "WARM", 
           class: "climate-warm-button" },
          {
            value: "Chilly",
            label: "CHILLY",
            class: "climate-chilly-button",
          },
        ]}
        onChange={props.onChange}
        selected={props.selected}
      />
      <p>
        <button onClick={props.nextStep}>Next Step</button>
      </p>
    </div>
  );
}

export default Step1;
