import React from 'react';
import RouteDashboard from '../../router/RouteDashboard';
import UserDashboard from '../../Pages/UserDashboard';


const DashboardLayout = () => {
    return <>
        <UserDashboard/>
        <RouteDashboard />
        
    </>
};

export default DashboardLayout
