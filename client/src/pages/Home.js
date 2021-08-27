import React from "react";
// import Jumbotron from "../components/Jumbotron";
import StepWizard from "react-step-wizard";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

const Home = () => {
  return (
    <div className="container">
      {/* <Jumbotron>
        <h1>Starter Stack</h1>
        <p>We are here to be awesome</p>
     </Jumbotron> */}
      <StepWizard>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </StepWizard>
    </div>
  );
};

export default Home;
