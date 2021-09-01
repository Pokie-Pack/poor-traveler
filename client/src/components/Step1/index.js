import React from "react";
import Step3 from "../Step3";

// function Step1(props) {
//   return (
//     <div class="container">
//       <h1>Click your preferred CLIMATE please</h1>
//       <p1>
//         <buttonWarm onClick={props.nextStep}>WARM 🔥</buttonWarm>
//       </p1>
//       <p2>
//         <buttonChilly onClick={props.goToStep(Step3)}>CHILLY 🧊</buttonChilly>
//       </p2>

//       <p3>
//         <button onClick={props.nextStep}>Next Step</button>
//       </p3>
//     </div>
//   );
// }

// export default Step1;

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
