import React from "react";
import RadioButtons from "../RadioButtons";

function Step3(props) {
  return (
    <div className="container">
      <h1> Step 2: Click your preferred TERRAIN please</h1>
      <RadioButtons
        name="topography"
        options={[
          {
            value: "Mountain",
            label: "MOUNTAIN",
            class: "topography-mountain-button",
          },
          {
            value: "Coastal",
            label: "COASTAL",
            class: "topography-coastal-button",
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

export default Step3;
