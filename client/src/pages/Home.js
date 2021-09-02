import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TRAVELPACKAGE } from '../utils/queries';

import StepWizard from "react-step-wizard";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Step6 from "../components/Step6";

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

  
  const { loading, data } = useQuery(QUERY_TRAVELPACKAGE);
  const travelPackages = data?.travelPackages || [];

  const handleStateChange = (field, value) => {
    console.log(field + " was changed to " + value);
    setFormState((prev) => {
      return { ...prev, [field]: value };
    });
  };

  return (
    <div className="container">
       {loading ? (
            <div>Loading...</div>
          ) : (
      <StepWizard>
        <Step1 onChange={handleStateChange} selected={formState.climate} />
        <Step2 onChange={handleStateChange} selected={formState.location} />
        <Step3 onChange={handleStateChange} selected={formState.topography}/>
        <Step4 onChange={handleStateChange} selected={formState.airfare}/>
        <Step5 onChange={handleStateChange} selected={formState.transportation}/>
        <Step6 onChange={handleStateChange} selected={formState.lodging}/>

      </StepWizard>
          )}
    </div>
  );
};

export default Home;
