import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

const UserProfile = () => {
  return (
    <div className='flex fixed'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <h1>User Profile</h1>
          <h1>user name</h1>
          </div>
          </div>
          </div>
  )
}

export default UserProfile
