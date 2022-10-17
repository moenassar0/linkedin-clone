import React from 'react'
import { useState, useEffect } from 'react';
import EditProfile from '../Popups/EditProfile';
import axios from '../../api/axios';

const Profile = () => {

    const [editProfileButton, setEditProfileButton] = useState(false);
    const [profile, setProfile] = useState([]);
    let headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};
    
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
        <EditProfile trigger={editProfileButton} setTrigger={setEditProfileButton} />
        <div className='main-container'>
            <div className='profile-container'>
                <div className='profile-cover-container'>
                    <div className='profile-cover'>
                    <div className='profile-image'>
                        <img className='img-resize circle' src="../../images/linkedin_icon.png"></img>
                    </div>
                    </div>
                </div>
                <div className='profile-info'>
                    <div className="profile-name-edit">
                        <span className='bold'>{profile.fname + " " + profile.lname}</span>
                        <button onClick={() => {editProfile()}}>Edit</button>
                    </div>
                    <span className='profile-employment'>{profile.status}</span>
                    <span className='profile-location grey'>{profile.location}</span>
                    <button className='pointer'>Open CV</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile