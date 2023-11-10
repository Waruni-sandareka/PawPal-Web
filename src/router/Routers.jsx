import React from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Contact from '../Pages/Contact';
import Booking from '../Pages/Booking';
import UserDashboard from '../Pages/UserDashboard';

const Routers = () => {
  return (
    <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/userdashboard' element={<UserDashboard/>}/>
          
    </Routes>
  )
}

export default Routers;
