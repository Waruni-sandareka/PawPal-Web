import React from 'react'
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';
import { Link } from 'react-router-dom';
import ProductImg from '../assets/img/petProducts.png';
import adoptImg from '../assets/img/petAdopt.png';


const AdminDashboard = () => {

  return (
    <div className='flex '>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><AdminSidebar /></div>
        <div className='col-span-4 w-full'>
          <AdminHeader />
          <div className='flex items-center justify-center container mt-5'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

              {/* Add Product Card */}

              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to='/admindashboard'>
                      <img src={ProductImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8'>Add Pet Products</h1>
                </div>
              </div>

              {/* Add Adopt Pet Card */}
              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to='/admindashboard'>
                      <img src={adoptImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8'>Add Pets for Adopt</h1>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
