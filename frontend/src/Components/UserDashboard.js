import React from 'react'
import UserNavbar from './UserNavbar'
import { BrowserRouter as Router, Link, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Feed from './User/Feed';

const UserDashboard = () => {
  return (
    <>
        <UserNavbar />
        <Outlet />
    </>

  )
}

export default UserDashboard