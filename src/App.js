import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import LoginIndUser from './pages/LoginIndUser';
import SignupIndUser from './pages/SignupIndUser';
import DashboardPublic from './pages/DashboardPublic';
import RatePage from './pages/RatePage';
import ServicePageUser from './pages/ServicePage';
import ServicePageVendor from './pages/ServicePageVendor';
import ServicePageGovt from './pages/ServicePageGovt';

// styles
import './App.css';


const App = () => {
    return (
        <div>
            <div className="routes">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/rate' element={<RatePage />} />
                    <Route exact path='/logininduser' element={<LoginIndUser />} />
                    <Route exact path='/signupinduser' element={<SignupIndUser />} />
                    <Route exact path='/dashboardpublic/*' element={<DashboardPublic />} />
                    <Route exact path='/serviceuser' element={<ServicePageUser />} />
                    <Route exact path='/servicevendor' element={<ServicePageVendor />} />
                    <Route exact path='/servicegovt' element={<ServicePageGovt />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;