import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import LoginIndUser from './pages/LoginIndUser';
import LoginOrg from './pages/LoginOrg';
import LoginVendor from './pages/LoginVendor';
import SignupIndUser from './pages/SignupIndUser';
import SignupOrg from './pages/SignupOrg';
import DashboardPublic from './pages/DashboardPublic';
import SignupVendor from './pages/SignupVendor';
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
                    <Route exact path='/loginorg' element={<LoginOrg />} />
                    <Route exact path='/signuporg' element={<SignupOrg />} />
                    <Route exact path='/loginvendor' element={<LoginVendor />} />
                    <Route exact path='/signupvendor' element={<SignupVendor />} />
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