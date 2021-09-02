import React from "react";
import RadioButtons from "../RadioButtons";

function Step6(props) {
  return (
    <div className="container">
      <h1> Step 6: Preferred place to stay?</h1>
      <RadioButtons
        name="lodging"
        options={[
          { value: "Hotel", 
            label: "HOTEL", 
            class: "lodging-hotel-button" },
          {
            value: "Hostel",
            label: "HOSTEL",
            class: "lodging-hostel-button",
          },
          { value: "B&B", label: "B&B", class: "lodging-bnb-button" },
        ]}
        onChange={props.onChange}
        selected={props.selected}
      />
      <p>
        <button onClick={props.nextStep}>Complete</button>
      </p>
    </div>
  );
}

export default Step6;
