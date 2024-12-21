import React from 'react'
import { InputField } from './inputField'
import "./../App.css"

const UserForm = () => {
    return (
        <div className='form' >
            <p style={{ fontSize: "1.2rem", margin: "10px 0", borderBottom: "1px solid gray", padding: "5px" }} >User Details</p>
            <form className='user-form' >
                <InputField label={"First Name"} name={"firstName"} placeholder={"First Name"} required />
                <InputField label={"Last Name"} name={"lastName"} placeholder={"Last Name"} required />
                <InputField label={"Email"} name={"email"} placeholder={"Email address"} required />
                <InputField label={"Number"} name={"number"} placeholder={"Phone number"} maxLength={6} required />
                <InputField label={"House No"} name={"houseNo"} placeholder={"House No."} required />
                <InputField label={"Street/Locality"} name={"streetLocality"} placeholder={"Street or Locality"} required />
                <InputField label={"City"} name={"city"} placeholder={"City"} required />
                <InputField label={"State"} name={"state"} placeholder={"State"} required />
                <InputField label={"Pin Code"} name={"pinCode"} placeholder={"Pin Code"} maxLength={6} required />
                <div className="submit-btn" >
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm