import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Routers from '../../router/Routers';

const Layout = () => {
    return <>
        <Navbar />
        <Routers />
        <Footer />
    </>
};

export default Layout
