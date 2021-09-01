import React from "react";
import RadioButtons from "../RadioButtons";

function Step5(props) {
  return (
    <div className="container">
      <h1> Step 4: Preferred transportation:</h1>
      <RadioButtons
        name="transportation"
        options={[
          { value: "Car", label: "CAR", class: "transportation-car-button" },
          {
            value: "Cruise",
            label: "CRUISE",
            class: "transportation-cruise-button",
          },
          { value: "RV", label: "RV", class: "transportation-rv-button" },
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

export default Step5;
