import React from 'react';

const Header = () => {

  // Get the user object from localStorage
  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const userDetails = getUserFromLocalStorage();

  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center'>
      <div>Search field</div>
      <div>Side button</div>
      Name:{userDetails.firstName}
    </div>
  )
}

export default Header; 
