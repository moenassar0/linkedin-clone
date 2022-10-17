import { useState } from "react";
import axios from "../../api/axios";

export const EditProfile = (props) => {

    const [fname, setFname] = useState('');
    const [validFName, setValidFName] = useState(false);

    const [lname, setLname] = useState('');
    const [validLName, setValidLName] = useState(false);

    const [status, setStatus] = useState('');
    
    const [location, setLocation] = useState('');

    let headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};

    async function updateProfile(){
        
        //Validate fields
        if(status != 0 && lname && location && fname){
            console.log(location, status, lname, fname);
            const response = await axios.post('/update', {location, status, lname, fname}, headers);
            console.log(response);
        }
    }

    return((props.trigger) ?
        <>
            <div className="popup-cover">
                <div className="popup-form">
                    <div className="popup-header">
                        <h3>Edit Profile</h3>
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
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="fname">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            autoComplete="off"
                            aria-describedby="uidnote"
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="status">
                            Employment Status:
                        </label>
                        <select id="status" onChange={(e) => setStatus(e.target.value)}>
                            <option value="0">--- Current Status ---</option>
                            <option value="student">Student</option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                        </select>
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
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register-field padding-15">
                        <button onClick={() => {updateProfile()}}>Update</button>
                    </div>
                </div>
            </div>
        </> : ""
    )
}

export default EditProfile