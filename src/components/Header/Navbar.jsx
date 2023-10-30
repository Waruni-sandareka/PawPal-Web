import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../layouts/Button';
import img from '../../assets/img/logo2.png';

const Navbar = () => {

  const backgroundColor = 'bg-textYellowColor';

  return (
    <div>
      <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor text-textColor">
        <div className='flex items-center'>
          <Link to='home' spy={true} smooth={true} duration={500} className='cursor-pointer'>
            <img src={img} alt='logo' width={250} height={50}></img>
          </Link>
        </div>
        <nav className='hidden lg:flex flex-row items-center gap-8'>
          <Link to='/' spy={true} smooth={true} duration={500} className='hover:text-textYellowColor transition-all cursor-pointer'>Home</Link>
          <Link to='service' spy={true} smooth={true} duration={500} className='hover:text-textYellowColor transition-all cursor-pointer'>Service</Link>
          <Link to='/' spy={true} smooth={true} duration={500} className='hover:text-textYellowColor transition-all cursor-pointer'>Products</Link>
          <Link to='/contact' spy={true} smooth={true} duration={500} className='hover:text-textYellowColor transition-all cursor-pointer'>Contact</Link>
          <Link to='/' spy={true} smooth={true} duration={500} className='hover:text-textYellowColor transition-all cursor-pointer'>About</Link>
        </nav>
        <div className='hidden lg:flex flex-row items-center gap-4'>
        <Link to='register' spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <Button title="Register" backgroundColor={backgroundColor} /></Link>
          <Link to='login' spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <Button title="Login" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
