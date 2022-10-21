import { useState, useEffect } from "react";
import axios from "../api/axios";
export const Companyjobs = () => {

    const [jobOfferings, setJobOfferings] = useState([]);
    const [currentJobOffer, setCurrentJobOffer] = useState([]);
    const headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};
    const [url, setURL] = useState('');

    useEffect(() => {
        fetchJobOfferings()
    }, [])

    async function fetchJobOfferings() {
        const response = await axios.get('/company/jobofferings', headers);
        console.log(response.data)
        setJobOfferings(response.data.offerings);
        setURL(response.data.url);
    }

    function setJob(jobOffering){
        setCurrentJobOffer(jobOffering);
        console.log(jobOffering._id);
    }

    return(
        <>
            <div className="feed-container padding-5">
                <div className="jobs-feed-container">
                    <div className="jobs-feed-header">Jobs provided by your company</div>
                    <div className="jobs-card-container">

                    {jobOfferings.map((item, i) => (
                        <div key={i} className="jobs-card" onClick={() => {setJob(item)}}>
                        <div className="jobs-card-img">
                            <img className='img-resize' src={url}></img>
                        </div>
                        <div className="jobs-card-info">
                            <span className="bold blue pointer">{item.job_title}</span>
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
                                <button onClick={() => {window.open(process.env.PUBLIC_URL + '/images/' + applicant._id + '.pdf', '_blank').focus();}} className='edit-picture-button pointer'>Open CV</button>
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