import { useState, useEffect } from "react";
import axios from "../../api/axios";
export const CompanyFeed = () => {

    const [companies, setCompanies] = useState([]);
    const [user, setUser] = useState([]);
    const [currCompanyID, setCurrCompanyID] = useState('');
    let headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};

    useEffect(() => {
        fetchCompanies()
    }, [])

    function refreshHeaders(){
        headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};
    }
    async function fetchCompanies() {
        const response = await axios.get('/companies', headers);
        console.log(response.data)
        setCompanies(response.data);
    }

    async function followCompany(company_id, name){
        console.log(name);
        const response = await axios.post('/follow', {company_id}, headers);
        fetchCompanies();
        const response2 = await axios.post('/refresh', {}, headers);
        localStorage.setItem("token", response2.data.access_token);
        refreshHeaders();
    }

    async function unfollowCompany(id, name){
        console.log(name);
        const response = await axios.post('/unfollow', {company_id: id}, headers);
        //console.log(response);
        fetchCompanies();
    }

    return(
        <>
            <div className="feed-container">
                {companies.map((company, i) => (
                    <div key={i} className="company-card-container">
                        <div className="company-card-img">
                            <img className="img-resize" src={company.picture_url ? company.picture_url : "../../images/empty_profile.png"}></img>
                        </div>
                        <div className="company-card-info">
                            <span className="bold">{company.company_title}</span>
                            <span>Software Development</span>
                            <span className="smaller-font grey"></span>
                            {company.following 
                            ? 
                            <button onClick={() => {unfollowCompany(company._id, company.company_title)}} className="follow-btn">UnFollow</button>
                            : 
                            <button onClick={() => {followCompany(company._id, company.company_title)}} className="follow-btn">+ Follow</button>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CompanyFeed;