import { useState, useEffect } from "react";
import axios from "../api/axios";
export const Companyjobs = () => {

    const [jobOfferings, setJobOfferings] = useState([]);
    const [currentJobOffer, setCurrentJobOffer] = useState([]);
    const headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};

    useEffect(() => {
        fetchJobOfferings()
    }, [])

    async function fetchJobOfferings() {
        const response = await axios.get('/company/jobofferings', headers);
        console.log(response.data)
        setJobOfferings(response.data);
    }

    function setJob(jobOffering){
        setCurrentJobOffer(jobOffering);
        console.log(jobOffering._id);
    }

    async function applyToJob(){
        const response = await axios.post('/apply', {jobOfferingID: currentJobOffer}, headers);
        console.log(response)
    }

    return(
        <>
            <div className="feed-container">
                <div className="jobs-feed-container">
                    <div className="jobs-feed-header">Jobs provided by your company</div>
                    <div className="jobs-card-container">

                    {jobOfferings.map((item, i) => (
                        <div key={i} className="jobs-card">
                        <div className="jobs-card-img">
                            <img className='img-resize' src="../../images/linkedin_icon.png"></img>
                        </div>
                        <div className="jobs-card-info">
                            <span className="bold blue pointer" onClick={() => {setJob(item)}}>{item.job_title}</span>
                            <span>{item.assoc_company?.company_title}</span>
                            <span className="grey">{item.location}</span>
                        </div>
                    </div>
                                ))}
                    </div>
                </div>
                <div className="job-expanded">
                {currentJobOffer.length == 0 ? "Click on one of the job offers" : <>
                {currentJobOffer.applied.map((applicant, i) => (
                    <div key={i} className="jobs-card">
                    <div className="jobs-card-img">
                        <img className='img-resize' src={"../../images/" + applicant._id + ".jpg"}></img>
                    </div>
                    <div className="jobs-card-info">
                        <span>{applicant.fname + " " + applicant.lname}</span>
                        <span>{applicant.status}</span>
                        <span className="grey">Location: {applicant.location}</span>
                        <button>CV</button>
                    </div>
                </div>
                    ))}
                </>}
                </div>
            </div>
        </>
    )
}

export default Companyjobs;