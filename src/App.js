import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import LoginIndUser from './pages/LoginIndUser';
import SignupIndUser from './pages/SignupIndUser';
import DashboardPublic from './pages/DashboardPublic';
import RatePage from './pages/RatePage';

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
                </Routes>
            </div>
        </div>
    )
}

export default App;