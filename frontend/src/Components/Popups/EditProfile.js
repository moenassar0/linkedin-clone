import { useState } from "react";

export const EditProfile = (props) => {

    const [fname, setFname] = useState('');
    const [validFName, setValidFName] = useState(false);

    const [lname, setLname] = useState('');
    const [validLName, setValidLName] = useState(false);

    return((props.trigger) ?
        <>
            <div className="popup-cover">
                <div className="popup-form">
                    <div className="popup-header">
                        <h3>Edit Profile for {auth.user}</h3>
                        <button onClick={() => {props.setTrigger(false)}} className="close-btn pointer">X</button>
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="fname">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            autoComplete="off"
                            aria-describedby="uidnote"
                        />
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="fname">
                            Location:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            autoComplete="off"
                            aria-describedby="uidnote"
                        />
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="status">
                            Employment Status:
                        </label>
                        <select id="status" onChange={(e) => setInstructor(e.target.value)}>
                            <option value="student">Student</option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                        </select>
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="fname">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            autoComplete="off"
                            aria-describedby="uidnote"
                        />
                    </div>
                </div>
            </div>
        </> : ""
    )
}

export default EditProfile