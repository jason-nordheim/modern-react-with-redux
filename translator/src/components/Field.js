import React from 'react' 

export default ({ label, value, onChange }) => (
    <div className="field">
        <label>{label}</label>
        <input 
            value={value}
            onChange={e => onChange(e.target.value)}
        /> 
    </div>
)

