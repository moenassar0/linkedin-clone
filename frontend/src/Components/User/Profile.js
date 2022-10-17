import React from 'react'
import { useState } from 'react';
import EditProfile from '../Popups/EditProfile';

const Profile = () => {

    const [editProfileButton, setEditProfileButton] = useState(false);
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
                        <span className='bold'>Mohamad Nassar</span>
                        <button onClick={() => {editProfile()}}>Edit</button>
                    </div>
                    <span className='profile-employment'>Student</span>
                    <span className='profile-location grey'>Beirut, Lebanon</span>
                    <button className='pointer'>Open CV</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile