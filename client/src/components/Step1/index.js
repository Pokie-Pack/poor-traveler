import React from "react";
import RadioButtons from "../RadioButtons";

function Step1(props) {
  return (
    <div className="container">
      <h1> Step 1: Click your preferred CLIMATE please</h1>
      <RadioButtons
        name="climate"
        options={[
          { value: "Warm", label: "WARM", class: "climate-warm-button" },
          { value: "Chilly", label: "CHILLY", class: "climate-chilly-button" },
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

const Step1 = (props) => {
  const { data, handleChange, next } = props;
  return (
    <form>
      <p>
        <label htmlFor="Step1">Click your preferred CLIMATE please:</label>
        <buttonWarm onClick={props.nextStep}>
          WARM 🔥 value={data.name}
          onChange={handleChange}
        </buttonWarm>
      </p>
      <p>
        <label htmlFor="Step1"></label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </p>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step1;
