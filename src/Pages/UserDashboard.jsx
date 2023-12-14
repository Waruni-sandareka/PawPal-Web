import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import ProfileWrapper from '../components/ProfileSection/ProfileWrapper';
import img from '../assets/img/petClinic0.png';
import careImg from '../assets/img/PetCare3.png';
import adoptImg from '../assets/img/PetAdopt.png';
import productImg from '../assets/img/PetProducts.png';
import image from '../assets/img/petCover.jpg';


const UserDashboard = () => {

  return (
    <div className='flex '>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <ProfileWrapper />
          <h5 className='text-1xl md:text-2xl font-sm mt-3 ml-6 text-textDarkBrown'>Which Sevice do you need ?</h5>
          <div className='flex items-center justify-center container mt-5'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {/* card */}
              <div className=' bg-backgroundColor rounded-3xl ml-5 shadow-md hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className=' overflow-hidden rounded-3xl border border-textDarkBrown'>
                    <Link to='/petclinicservice'>
                      <img src={img} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8'>Providing compassionate.</h1>

                </div>
              </div>

              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to='/daycareservice'>
                      <img src={careImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8'>Providing compassionate.</h1>
                </div>
              </div>

              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to='/petadoptionservice'>
                      <img src={adoptImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8'>Providing compassionate.</h1>

                </div>
              </div>


              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to="/petproductservice">
                      <img src={productImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8'>Providing compassionate.</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Create Services button and Services image slider */}
          <div className='grid grid-cols-3 mt-5'>
            <div className='col-span-1'>
            <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden '>
                  <h1 className=' text-lg text-textDarkBrown mt-8 px-3'>Providing compassionate.</h1>
                  <h1 className=' text-lg text-textDarkBrown mt-8 px-3'>Providing compassionate.</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-2'>
            <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md '>
                <div className='flex flex-col'>
                  <div className='rounded-3xl overflow-hidden '>
                  <img src={image}/>
                  
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default UserDashboard
