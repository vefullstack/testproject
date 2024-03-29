import React, { useEffect, useState } from 'react';
import axios from "axios";
import ScaleList from './ScaleList'; // Importing ScaleList component 
import Feature from '../Chart';

/**
 * ScaleComponent Functional  
 */

function ScaleComponent() {
    // Initializing state using useState hook with default parameter values
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [servicesList, setServicesList] = useState([]);
    const [parameterValues, setParameterValues] = useState({
        SaaS_Security_Risk_Mitigation: 50,
        Data_Loss_Prevention_over_SaaS: 50,
        SaaS_Application_Classification: 50,
        SaaS_Risk_Assessment_Reporting_Compliance: 50,
        SaaS_Application_Discovery: 50
    });

    useEffect(()=>{
        getServices();
    },[])

    // Function to handle slider change and update state accordingly
    const handleSliderChange = (e, parameter) => { 
        setParameterValues({
            ...parameterValues,
            [parameter]: parseInt(e.target.value)
        });
    };


      // Function to handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Make a POST request to your API endpoint with the form data
            const response = await axios.post('http://4.227.170.38/api/add', parameterValues); 
            setIsSubmitted(true); // Set the submitted state to true
            getServices();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getServices = async (e) => { 
        try {
            // Make a POST request to your API endpoint with the form data
            const response = await axios.get('http://4.227.170.38/api'); 
            setServicesList(response?.data);  
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // JSX rendering
    return (
        <div className="container mt-5">
            <h2><b>Rate your satisfaction with our service</b></h2>
            <div className='row'>
            <form className='pt-5 col-lg-5' onSubmit={handleSubmit}> 
                {/* Rendering ScaleList component for each parameter */}
                <ScaleList name="SaaS Security Risk Mitigation" keyname="SaaS_Security_Risk_Mitigation" parameter={parameterValues.SaaS_Security_Risk_Mitigation} onChange={handleSliderChange}/>
                <ScaleList name="Data Loss Prevention over SaaS" keyname="Data_Loss_Prevention_over_SaaS" parameter={parameterValues.Data_Loss_Prevention_over_SaaS} onChange={handleSliderChange}/>
                <ScaleList name="SaaS Application Classification" keyname="SaaS_Application_Classification" parameter={parameterValues.SaaS_Application_Classification} onChange={handleSliderChange}/>
                <ScaleList name="SaaS Risk Assessment Reporting & Compliance" keyname="SaaS_Risk_Assessment_Reporting_Compliance" parameter={parameterValues.SaaS_Risk_Assessment_Reporting_Compliance} onChange={handleSliderChange}/>
                <ScaleList name="SaaS Application Discovery" keyname="SaaS_Application_Discovery" parameter={parameterValues.SaaS_Application_Discovery} onChange={handleSliderChange}/>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='col-lg-6 offset-lg-1'>
                {(servicesList?.length > 0 && 
                 <Feature data={servicesList}/>
            )}
           
            </div> 
            </div>
            {isSubmitted && <p>Form submitted successfully!</p>}
        </div>
    );
}

export default ScaleComponent;
