import React from "react";
import RadioButtons from "../RadioButtons";

function Step2(props) {
  return (
    <div className="container">
      <h1> Step 2: Click your preferred TERRAIN please</h1>
      <RadioButtons
        name="terrain"
        options={[
          { value: "Beach", label: "BEACH", class: "terrain-beach-button" },
          { value: "Inland", label: "INLAND", class: "terrain-inland-button" },
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

export default Step2;
