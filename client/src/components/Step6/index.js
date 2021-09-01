import React from "react";
import RadioButtons from "../RadioButtons";

function Step6(props) {
  return (
    <div className="container">
      <h1> Step 5: Preferred place to stay?</h1>
      <RadioButtons
        name="stay"
        options={[
          { value: "Hotel", label: "HOTEL", class: "stay-hotel-button" },
          {
            value: "Hostel",
            label: "HOSTEL",
            class: "stay-hostel-button",
          },
          { value: "B&B", label: "B&B", class: "stay-bnb-button" },
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

export default Step6;
