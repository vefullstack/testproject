import React from 'react'

/**
 * Functional component representing a scale list item.
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the parameter.
 * @param {number} props.parameter - Current value of the parameter.
 * @param {Function} props.onChange - Function to handle parameter change.
 * @returns {JSX.Element} ScaleList component.
 */

export default function ScaleList(props) {
  return (
    <div className="mb-3">
    <label htmlFor="parameter1" className="form-label">{props.name}: <span style={{ fontWeight: 'bold', color: 'blue' }}> {props.parameter}</span></label>
    <input type="range" min="0" max="100" value={props.parameter} className="form-range" id="parameter1" onChange={(e) => props.onChange(e, props.keyname)} />
</div>
  )
}


