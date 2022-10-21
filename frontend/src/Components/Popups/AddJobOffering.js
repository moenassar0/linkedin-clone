import { useState, useEffect } from "react";
import axios from "../../api/axios";

export const AddJobOffering = (props) => {
    const [jobTitle, setJobTitle] = useState('');
    const [schedule, setSchedule] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);
    let headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};
    async function addJobOffering(){
        if(schedule != 0 && jobTitle && location){
            try{
                setLoading(true);
                const response = await axios.post('/jobofferings', {schedule, job_title: jobTitle, location}, headers);
                setAdded(true);
                setLoading(false);
                console.log(response);
            }catch(err){
                setLoading(false);
                console.log(err)
            }
        }
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
                        <label htmlFor="job_title">
                            Job Title:
                        </label>
                        <input
                            type="text"
                            id="job_title"
                            autoComplete="off"
                            aria-describedby="uidnote"
                            onChange={(e) => setJobTitle(e.target.value)}
                        />

                        <label htmlFor="schedule">
                            Schedule:
                        </label>
                        <select className='select' id="schedule" onChange={(e) => setSchedule(e.target.value)}>
                            <option value="0">---Select Schedule---</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>

                        <label htmlFor="location">
                            Location:
                        </label>
                        <input
                            type="text"
                            id="location"
                            autoComplete="off"
                            aria-describedby="uidnote"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button onClick={addJobOffering}>Add</button>
                        {loading && <div className="loading-div"><img className='img-resize' src="../../images/loading-load.gif"></img></div>}
                        {added && <div className="loading-div"><img className='img-resize' src="../../images/check.png"></img></div>}
                    </div>
                </div>
            </div>
        </> : ""
    )
}

export default AddJobOffering