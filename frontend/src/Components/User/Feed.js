import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const Feed = () => {

    const [jobOfferings, setJobOfferings] = useState([]);

    useEffect(() => {
        fetchJobOfferings()
    }, [])

    async function fetchJobOfferings() {
        const response = await axios.get('/jobofferings');
        console.log(response.data)
        setJobOfferings(response.data);
    }

    return(
        <>
            <div className="feed-container">
                <div className="jobs-feed-container">
                    <div className="jobs-feed-header">Jobs in Lebanon</div>
                    <div className="jobs-card-container">
                    {jobOfferings.map((item, i) => (
                                    <div key={i}>
                                        {item.job_title}
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed;