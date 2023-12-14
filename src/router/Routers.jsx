import React from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Contact from '../Pages/Contact';
import Booking from '../Pages/Booking';
import UserDashboard from '../Pages/UserDashboard';
import PastService from '../Pages/PastService';
import UpcomingAppoinments from '../Pages/UpcomingAppoinments';
import PetsProfile from '../Pages/PetsProfile';
import UserProfile from '../Pages/UserProfile';
import DayCareService from '../Pages/DayCareService';
import PetClinicService from '../Pages/PetClinicService';
import PetAdoptionService from '../Pages/PetAdoptionService';
import AddPet from '../Pages/AddPet';
import AdminDashboard from '../Pages/AdminDashboard';
import AddProduct from '../Pages/AddProduct';
import AddPetForAdopt from '../Pages/AddPetForAdopt';
import UserList from '../Pages/UserList';
import PetList from '../Pages/PetList';
import AppointmentList from '../Pages/AppointmentList';
import PetProductService from '../Pages/PetProductService';

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
          <Route path='/pastservice' element={<PastService/>}/>
          <Route path='/upcoming' element={<UpcomingAppoinments/>}/>
          <Route path='/petsprofile' element={<PetsProfile/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/petclinicservice' element={<PetClinicService/>}/>
          <Route path='/petadoptionservice' element={<PetAdoptionService/>}/>
          <Route path='/daycareservice' element={<DayCareService/>}/>
          <Route path='/addpet' element={<AddPet/>}/>
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/addpetforadopt' element={<AddPetForAdopt/>}/>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/petlist' element={<PetList/>}/>
          <Route path='/appointmentlist' element={<AppointmentList/>}/>
          <Route path='/petproductservice' element={<PetProductService/>}/>
          
    </Routes>
  )
}

export default Routers;
