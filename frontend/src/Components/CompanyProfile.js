import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import AddJobOffering from './Popups/AddJobOffering';

const CompanyProfile = () => {

    const [editProfileButton, setEditProfileButton] = useState(false);
    const [profile, setProfile] = useState([]);
    const [baseImage, setBaseImage] = useState('');
    const [addJobOfferingButton, setAddJobOfferingButon] = useState(false);

    let headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};

    async function handleChange(e) {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        //setBaseImage();
        uplodeImage(base64);
    };

    async function uplodeImage(base64){
        const base64split = base64.split(",");
        let word = base64split[1];
        try{
            const response = await axios.post('/uploadimg', {data: word}, headers);
            console.log(response);
        }catch(err){
            console.log("Error" + err);
        }
        fetchProfile()
    }
    
    const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
        resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
        reject(error);
        };
    });
    };
    
    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const response = await axios.get('/user', headers);
        console.log(response.data)
        setProfile(response.data);
    }

    function editProfile(){
        setEditProfileButton(true);
    }
  return (
    <>
        <AddJobOffering trigger={addJobOfferingButton} setTrigger={setAddJobOfferingButon}>
        </AddJobOffering>
        <div className='main-container'>
            <div className='profile-container'>
                <div className='profile-cover-container'>
                    <div className='profile-cover'>
                    <div className='profile-image'>
                        <img className='img-resize circle' src={process.env.PUBLIC_URL + '/images/' + profile._id + '.jpg'}></img>
                    </div>
                    </div>
                </div>
                <div className='profile-info padding-5'>
                    <div className="profile-name-edit">
                        <span className='bold'>{profile.company_title}</span>
                        <button className='edit-picture-button' onClick={() => {setAddJobOfferingButon(true)}}>Add Job Offering</button>
                    </div>
                    <span className='profile-employment'>{profile.status}</span>
                    <span className='profile-location grey'>{profile.location}</span>
                    <div className="profile-buttons">
                        <label htmlFor="edit-picture" className="edit-picture-button">Edit Picture<input type="file" id="edit-picture" className='hidden' onChange={(e) => {handleChange(e)}}/></label>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CompanyProfile