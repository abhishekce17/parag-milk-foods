import React, { useState } from 'react'

export const InputField = ({ label, ...atr }) => {
    const [value, setValue] = useState("");

    return (
        <div className="input-field" >
            {label && <label htmlFor={label} >{label}</label>}
            <input id={label} {...atr} onChange={e => setValue(e.target.value)} />
        </div>
    )
}
