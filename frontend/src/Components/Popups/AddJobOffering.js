import { useState, useEffect } from "react";

export const AddJobOffering = (props) => {
    const [jobTitle, setJobTitle] = useState('');
    const [schedule, setScheudle] = useState('');
    const [location, setLocation] = useState('');

    function addJobOffering(){
        
    }

    return(
        (props.trigger) ? <>
            <div className="popup-cover">
                <div className="popup-form">
                    <div className="popup-header">
                        <h3>Add Job Offering</h3>
                        <button onClick={() => {props.setTrigger(false)}} className="close-btn pointer">X</button>
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="fname">
                            Job Title:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            autoComplete="off"
                            aria-describedby="uidnote"
                            onChange={(e) => setJobTitle(e.target.value)}
                        />

                        <label htmlFor="schedule">
                            Schedule:
                        </label>
                        <select className='select' id="select-instructor" onChange={(e) => setScheudle(e.target.value)}>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>

                        <label htmlFor="location">
                            Location:
                        </label>
                        <input
                            type="text"
                            id="schedule"
                            autoComplete="off"
                            aria-describedby="uidnote"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button onClick={addJobOffering}>Add</button>
                    </div>
                </div>
            </div>
        </> : ""
    )
}

export default AddJobOffering