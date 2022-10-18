import React from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

const CompanyNavbar = () => {
  return (
    <>
        <div className='user-navbar'>
            <div className='navbar-icon'>
                <img className='img-resize' src="../../images/linkedin_icon.png"></img>
            </div>
            <div className='navbar-searchbar'>
                <input type="text"></input>
            </div>
            <div className='navbar-items'>
                <Link className='navbar-item pointer' to="/company/home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                    </svg>
                    <span>Home</span>
                </Link>
                <Link className='navbar-item pointer' to="/company/jobs">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                    </svg>
                    <span>Jobs</span>
                </Link>
            </div>
        </div>
    </>

  )
}

export default CompanyNavbar