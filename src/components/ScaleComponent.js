import React, { useState } from 'react';

function ScaleComponent() {
    const [parameterValues, setParameterValues] = useState({
        parameter1: 50,
        parameter2: 50,
        parameter3: 50,
        parameter4: 50,
        parameter5: 50
    });

    const handleSliderChange = (e, parameter) => {
        setParameterValues({
            ...parameterValues,
            [parameter]: parseInt(e.target.value)
        });
    };

    return (
        <div className="container mt-5">
            <h2>Rate your satisfaction with our service</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="parameter1" className="form-label">Parameter 1: <span style={{ fontWeight: 'bold', color: 'blue' }}> {parameterValues.parameter1}</span></label>
                    <input type="range" min="0" max="100" value={parameterValues.parameter1} className="form-range" id="parameter1" onChange={(e) => handleSliderChange(e, 'parameter1')} />
                </div>

                <div className="mb-3">
                    <label htmlFor="parameter2" className="form-label">Parameter 2: <span style={{ fontWeight: 'bold', color: 'blue' }}>{parameterValues.parameter2}</span></label>
                    <input type="range" min="0" max="100" value={parameterValues.parameter2} className="form-range" id="parameter2" onChange={(e) => handleSliderChange(e, 'parameter2')} />
                </div>

                <div className="mb-3">
                    <label htmlFor="parameter3" className="form-label">Parameter 3: <span style={{ fontWeight: 'bold', color: 'blue' }}>{parameterValues.parameter3}</span></label>
                    <input type="range" min="0" max="100" value={parameterValues.parameter3} className="form-range" id="parameter3" onChange={(e) => handleSliderChange(e, 'parameter3')} />
                </div>

                <div className="mb-3">
                    <label htmlFor="parameter4" className="form-label">Parameter 4: <span style={{ fontWeight: 'bold', color: 'blue' }}> {parameterValues.parameter4}</span></label>
                    <input type="range" min="0" max="100" value={parameterValues.parameter4} className="form-range" id="parameter4" onChange={(e) => handleSliderChange(e, 'parameter4')} />
                </div>

                <div className="mb-3">
                    <label htmlFor="parameter5" className="form-label">Parameter 5: <span style={{ fontWeight: 'bold', color: 'blue' }}>{parameterValues.parameter5}</span></label>
                    <input type="range" min="0" max="100" value={parameterValues.parameter5} className="form-range" id="parameter5" onChange={(e) => handleSliderChange(e, 'parameter5')} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ScaleComponent;
