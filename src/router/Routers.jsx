import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Register from '../Pages/Register';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default Routers