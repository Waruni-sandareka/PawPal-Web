import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import ProfilePhotoUpload from '../components/ProfileSection/ProfilePhotoUpload';

const UserProfile = () => {

  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const userDetails = getUserFromLocalStorage();

  return (
    <div className='flex fixed'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <ProfilePhotoUpload />
          <div className='grid grid-cols-2 mt-3'>
            <div className='col-span-1'>
              Your Name : {userDetails.firstName}  {userDetails.lastName}

              
            </div>
            <div className='col-span-1'>Your Email : {userDetails.email} </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
