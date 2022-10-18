import React from 'react'
import { useState, useEffect } from 'react';
import EditProfile from '../Popups/EditProfile';
import axios from '../../api/axios';

const Profile = () => {

    const [editProfileButton, setEditProfileButton] = useState(false);
    const [profile, setProfile] = useState([]);
    const [baseImage, setBaseImage] = useState('');

    let headers = {headers:{'Authorization' : "Bearer " + localStorage.getItem("token")}};

    async function handleChange(e) {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        //setBaseImage();
        uplodeImage(base64);
    };

    async function handleCV(e){
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        //setBaseImage();
        uplodeCV(base64);
    }

    async function uplodeImage(base64){
        const base64split = base64.split(",");
        let word = base64split[1];
        const response = await axios.post('/uploadimg', {data: word}, headers);
        
        console.log(response);
        fetchProfile()
    }

    async function uplodeCV(base64){
        const base64split = base64.split(",");
        let word = base64split[1];
        const response = await axios.post('/uploadcv', {data: word}, headers);
        
        console.log(response);
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
        <EditProfile trigger={editProfileButton} setTrigger={setEditProfileButton} />
        <div className='main-container'>
            <div className='profile-container'>
                <div className='profile-cover-container'>
                    <div className='profile-cover'>
                    <div className='profile-image'>
                        <img className='img-resize circle' src={process.env.PUBLIC_URL + '/images/' + profile._id + '.jpg'}></img>
                    </div>
                    </div>
                </div>
                <div className='profile-info'>
                    <div className="profile-name-edit">
                        <span className='bold'>{profile.fname + " " + profile.lname}</span>
                        <button className='edit-picture-button' onClick={() => {editProfile()}}>Edit</button>
                    </div>
                    <span className='profile-employment'>{profile.status}</span>
                    <span className='profile-location grey'>{profile.location}</span>
                    <div className="profile-buttons">
                        <label htmlFor="edit-picture" className="edit-picture-button">Edit Picture<input type="file" id="edit-picture" className='hidden' onChange={(e) => {handleChange(e)}}/></label>
                        <label htmlFor="edit-cv" className="edit-picture-button">Edit CV<input type="file" id="edit-cv" className='hidden' onChange={(e) => {handleCV(e)}}/></label>
                        <button onClick={() => {window.open(process.env.PUBLIC_URL + '/images/' + profile._id + '.pdf', '_blank').focus();}} className='edit-picture-button pointer'>Open CV</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Profile