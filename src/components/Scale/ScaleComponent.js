import React, { useState } from 'react';
import ScaleList from './ScaleList'; // Importing ScaleList component

/**
 * ScaleComponent Functional  
 */

function ScaleComponent() {
    // Initializing state using useState hook with default parameter values
    const [parameterValues, setParameterValues] = useState({
        SaaS_Security_Risk_Mitigation: 50,
        Data_Loss_Prevention_over_SaaS: 50,
        SaaS_Application_Classification: 50,
        SaaS_Risk_Assessment_Reporting_Compliance: 50,
        SaaS_Application_Discovery: 50
    });

    // Function to handle slider change and update state accordingly
    const handleSliderChange = (e, parameter) => { 
        setParameterValues({
            ...parameterValues,
            [parameter]: parseInt(e.target.value)
        });
    };

    // JSX rendering
    return (
        <div className="container mt-5">
            <h2><b>Rate your satisfaction with our service</b></h2>
            <form className='pt-5 col-lg-8'> 
                {/* Rendering ScaleList component for each parameter */}
                <ScaleList name="SaaS Security Risk Mitigation" keyname="SaaS_Security_Risk_Mitigation" parameter={parameterValues.SaaS_Security_Risk_Mitigation} onChange={handleSliderChange}/>
                <ScaleList name="Data Loss Prevention over SaaS" keyname="Data_Loss_Prevention_over_SaaS" parameter={parameterValues.Data_Loss_Prevention_over_SaaS} onChange={handleSliderChange}/>
                <ScaleList name="SaaS Application Classification" keyname="SaaS_Application_Classification" parameter={parameterValues.SaaS_Application_Classification} onChange={handleSliderChange}/>
                <ScaleList name="SaaS Risk Assessment Reporting & Compliance" keyname="SaaS_Risk_Assessment_Reporting_Compliance" parameter={parameterValues.SaaS_Risk_Assessment_Reporting_Compliance} onChange={handleSliderChange}/>
                <ScaleList name="SaaS Application Discovery" keyname="SaaS_Application_Discovery" parameter={parameterValues.SaaS_Application_Discovery} onChange={handleSliderChange}/>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ScaleComponent;
