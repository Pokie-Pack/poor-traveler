import React, { useState } from "react";
// import Jumbotron from "../components/Jumbotron";
import StepWizard from "react-step-wizard";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

const Home = () => {
  const [formState, setFormState] = useState({
    climate: "",
    location: "",
    topography: "",
    airfare: "",
    transportation: "",
    lodging: "",
    activity: [],
  });

  // TODO: how do I use useQuery from week 21 activites 13 and 14 to query the travel packages

  const handleStateChange = (field, value) => {
    console.log(field + " was changed to " + value);
    setFormState((prev) => {
      return { ...prev, [field]: value };
    });
  };

  return (
    <div className="container">
      <StepWizard>
        <Step1 onChange={handleStateChange} selected={formState.climate} />
        <Step2 />
        <Step3 />
        <Step4 />
      </StepWizard>
    </div>
  );
};

export default Home;
