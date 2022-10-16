import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const CompanyFeed = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies()
    }, [])

    async function fetchCompanies() {
        const response = await axios.get('/companies');
        console.log(response.data)
        setCompanies(response.data);
    }

    function followCompany(company_id){
        console.log(company_id);
    }

    return(
        <>
            <div className="feed-container">
                {companies.map((company, i) => (
                    <div key={i} className="company-card-container">
                        <div className="company-card-img">
                            <img className="img-resize" src="../../images/linkedin_icon.png"></img>
                        </div>
                        <div className="company-card-info">
                            <span className="bold">{company.company_title}</span>
                            <span>Software Development</span>
                            <span className="smaller-font grey">19,000 Followers</span>
                            <button onClick={() => {followCompany(company._id)}} className="follow-btn">+ Follow</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CompanyFeed;