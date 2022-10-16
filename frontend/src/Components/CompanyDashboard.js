import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import CompanyNavbar from './CompanyNavbar';

const CompanyDashboard = () => {
  return (
    <>
        <CompanyNavbar />
        <Outlet />
    </>

  )
}

export default CompanyDashboard