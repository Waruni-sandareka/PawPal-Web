import React from 'react'
import women from '../../assets/img/women.png';


const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

const userDetails = getUserFromLocalStorage();

const User = {
  imageSrc : women,
  imageAlt:"profImg",
  residency:"Galle",
  verified:"Yes"
}

const ProfileBody = () => {
  return (
    <div className='flex space-x-4'>
      <img 
      src={User.imageSrc} 
      alt={User.imageAlt} 
      className='rounded-full w-16 h-16 border-gray-950' 
      />
      <div>
        <h1 className='font-medium text-textDarkBrown text-2xl'>
          Good Morning, {userDetails.firstName}  {userDetails.lastName}
        </h1>
      </div>
    </div>
  )
}

export default ProfileBody
