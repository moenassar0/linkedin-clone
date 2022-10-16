import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const CompanyFeed = () => {

    const [companies, setCompanies] = useState([]);
    const [user, setUser] = useState([]);
    const headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};

    useEffect(() => {
        fetchCompanies()
    }, [])

    async function fetchCompanies() {
        const response = await axios.get('/companies', headers);
        console.log(response.data)
        setCompanies(response.data);
    }

    async function followCompany(company_id){
        const response = await axios.post('/follow', {company_id}, headers);
        fetchCompanies();
    }

    async function unfollowCompany(company_id){
        const response = await axios.post('/unfollow', {company_id}, headers);
        console.log(response);
        fetchCompanies();
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
                            {company.following 
                            ? 
                            <button onClick={() => {unfollowCompany(company._id)}} className="follow-btn">UnFollow</button>
                            : 
                            <button onClick={() => {followCompany(company._id)}} className="follow-btn">+ Follow</button>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CompanyFeed;