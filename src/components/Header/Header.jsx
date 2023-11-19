import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell } from 'react-icons/fi';
import { MdChatBubbleOutline } from 'react-icons/md';
import img from '../../assets/img/circle.png';
import { Link } from 'react-router-dom';
import peticon from '../../assets/img/addpet.png';


const Header = () => {

  // Track whether the dropdown menu is open or closed
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);

  // Toggle the state of the dropdown menu
  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  // Get the user object from localStorage
  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const userDetails = getUserFromLocalStorage();


  return (
    <div className='bg-backgroundColor w-full h-16 px-4 flex justify-between items-center shadow-sm'>
      <div>
        <div className='relative'>
          <AiOutlineSearch fontsize={20} className='text-gray-400 absolute top-1/2 translate-y-2/3 left-3' />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-textYellowColor rounded-xl pl-11'>
        </input>
      </div>
      <div className='flex items-center gap-3'>
        <MdChatBubbleOutline fontsize={20} />
        <FiBell fontsize={20} />
        <Link to='/addpet'><img src={peticon} className='w-8'></img></Link>
        <img
          src={img}
          alt='Profile image'
          className='rounded-circle w-8 h-8 cursor-pointer'
          onClick={toggleDropdownMenu}
        />
        {/* Display the dropdown menu if it is open */}
        {isDropdownMenuOpen && (
          <div className='dropdown-menu absolute top-16 right-0'>
            <ul>
              <li><Link to="/userprofile">My Profile</Link></li>
              <li>Settings</li>
            </ul>
          </div>
        )}
        <div className='text-textDarkBrown font-normal'>{userDetails.firstName}</div>
      </div>
    </div>
  )
}

export default Header; 