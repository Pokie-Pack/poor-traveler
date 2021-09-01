import React from "react";
import RadioButtons from "../RadioButtons";

function Step4(props) {
  return (
    <div className="container">
      <h1> Step 3: Do you need Air Fare?</h1>
      <RadioButtons
        name="airfare"
        options={[
          {
            value: "Yes",
            label: "YES",
            class: "airfare-yes-button",
          },
          {
            value: "No",
            label: "NO",
            class: "airfare-no-button",
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

export default Step4;
