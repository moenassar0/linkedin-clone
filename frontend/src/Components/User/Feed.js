import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const Feed = () => {

    const [jobOfferings, setJobOfferings] = useState([]);
    const [currentJobOffer, setCurrentJobOffer] = useState([]);

    useEffect(() => {
        fetchJobOfferings()
    }, [])

    async function fetchJobOfferings() {
        const response = await axios.get('/jobofferings');
        console.log(response.data)
        setJobOfferings(response.data);
    }

    function setJob(jobOffering){
        setCurrentJobOffer(jobOffering);
        console.log(jobOffering._id);
    }

    return(
        <>
            <div className="feed-container">
                <div className="jobs-feed-container">
                    <div className="jobs-feed-header">Jobs in Lebanon</div>
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
                {currentJobOffer.length == 0 ? "Click on one of the job offers" : currentJobOffer.job_title}
                </div>
            </div>
        </>
    )
}

export default Feed;