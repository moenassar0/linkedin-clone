import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../../api/axios';

const CompanyProfile = () => {

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

    </>
  )
}

export default CompanyProfile