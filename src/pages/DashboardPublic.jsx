import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from '../PublicDashComp/Sidebar/Sidebar';
import Dashboard from '../PublicDashComp/Dashboard/Dashboard';
import VendorList from '../PublicDashComp/VendorList/VendorList';

const DashboardPublic = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route exact path='/overview' element={<Dashboard />} />
        <Route exact path='/vendorlist' element={<VendorList />} />
      </Routes>
    </div>
  )
}

export default DashboardPublic