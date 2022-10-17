import React from 'react'

const Profile = () => {
  return (
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
                <span className='profile-name bold'>Mohamad Nassar</span>
                <span className='profile-employment'>Student</span>
                <span className='profile-location grey'>Beirut, Lebanon</span>
                <button className='pointer'>Open CV</button>
            </div>
        </div>
    </div>
  )
}

export default Profile