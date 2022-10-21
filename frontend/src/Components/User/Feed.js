import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const Feed = () => {

    const [jobOfferings, setJobOfferings] = useState([]);
    const [currentJobOffer, setCurrentJobOffer] = useState([]);
    const headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};
    //const [url, setURL] = useState('');
    let url = '';
    useEffect(() => {
        fetchJobOfferings()
    }, [])

    async function fetchJobOfferings() {
        const response = await axios.get('/jobofferings', headers);
        console.log(response.data)
        setJobOfferings(response.data);
    }

    function CheckImage(path) {
        axios.create({
            baseURL: 'http://localhost:3000/'})
          .get(path)
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
      }

    function setJob(jobOffering){
        setCurrentJobOffer(jobOffering);
        console.log(jobOffering._id);
    }

    async function applyToJob(){
        const response = await axios.post('/apply', {jobOfferingID: currentJobOffer}, headers);
        console.log(response)
    }

    function findImage(item){
        if(!CheckImage(process.env.PUBLIC_URL + '/images/' + item.assoc_company?._id + '.jpg')){
            url = (process.env.PUBLIC_URL + '/images/' + item.assoc_company?._id + '.jpg')
        }else{
            url = "../../images/linkedin_icon.png";
        } 
        //item.assoc_company?._id ? 
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
                            <img className='img-resize' src={item.assoc_company?.picture_url}></img>
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
                {currentJobOffer.length == 0 ? "Click on one of the job offers" :
                <div className="jobs-card">
                    <div className="jobs-card-img">
                        <img className='img-resize' src={currentJobOffer.assoc_company?.picture_url}></img>
                    </div>
                    <div className="jobs-card-info">
                        <span className="job-title">{currentJobOffer.job_title}</span>
                        <span>{currentJobOffer.schedule}</span>
                        <span>{currentJobOffer.location}</span>
                        <span>Company: {currentJobOffer.assoc_company?.company_title}</span>
                        <button onClick={() => {applyToJob()}} className="edit-picture-button">Apply</button>
                    </div>
                </div>}
                </div>
            </div>
        </>
    )
}

export default Feed;