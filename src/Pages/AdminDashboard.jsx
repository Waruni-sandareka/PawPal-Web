import React from 'react'
import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';
import { Link } from 'react-router-dom';
import ProductImg from '../assets/img/petProducts.png';
import adoptImg from '../assets/img/petAdopt.png';
import userIcon from '../assets/img/user.png';
import petIcon from '../assets/img/paw3.png';
import scheduleIcon from '../assets/img/upcoming.png';
import approveIcon from '../assets/img/approve.png';


const AdminDashboard = () => {

  useEffect(() => {
    // Sample data
    const data = {
      labels: ['Upcoming Appointments', 'Approved Appointments', 'Registered Users', 'Registered Pets'],
      datasets: [
        {
          label: 'Count',
          data: [10, 5, 100, 50], // Replace with your actual data
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const ctx = document.getElementById('myChart').getContext('2d');

    // Check if there's an existing chart and destroy it
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

  // Create the chart
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}, []);



  return (
    <div className='flex bg-backgroundColor'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><AdminSidebar /></div>
        <div className='col-span-4 w-full'>
          <AdminHeader />

          {/* Create Services button and Services image slider */}
          <div className='grid grid-cols-4 mt-5 mr-5'>
            <div className='col-span-1 '>
              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  border border-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden text-center'>
                    <img src={userIcon} className='w-14 mx-auto'/>
                    <h1 className=' text-lg text-textDarkBrown mt-5'>Total Registered<br></br> Users</h1>
                    <h1 className=' text-2xl text-textDarkBrown px-3 mt-5 mx-auto rounded-2xl bg-textYellowColor w-14 h-14 flex items-center justify-center font-medium'>5</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-1 '>
              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  border border-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden text-center'>
                    <img src={petIcon} className='w-14 mx-auto'/>
                    <h1 className=' text-lg text-textDarkBrown mt-5'>Total Registered<br></br> Pets</h1>
                    <h1 className=' text-2xl text-textDarkBrown px-3 mt-5 mx-auto rounded-2xl bg-textYellowColor w-14 h-14 flex items-center justify-center font-medium'>5</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-1 '>
              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  border border-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden text-center'>
                    <img src={scheduleIcon} className='w-14 mx-auto'/>
                    <h1 className=' text-lg text-textDarkBrown mt-5'>Total Upcoming Appointments</h1>
                    <h1 className=' text-2xl text-textDarkBrown px-3 mt-5 mx-auto rounded-2xl bg-textYellowColor w-14 h-14 flex items-center justify-center font-medium'>5</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-1 '>
              <div className='rounded-3xl  bg-backgroundColor ml-5 shadow-md  border border-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden text-center'>
                    <img src={approveIcon} className='w-14 mx-auto'/>
                    <h1 className=' text-lg text-textDarkBrown mt-5'>Total Approved Appointments</h1>
                    <h1 className=' text-2xl text-textDarkBrown px-3 mt-5 mx-auto rounded-2xl bg-textYellowColor w-14 h-14 flex items-center justify-center font-medium'>5</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center container mt-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

              {/* Add Product Card */}

              <div className='col-span-1 rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to='/addproduct'>
                      <img src={ProductImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8 mx-auto font-medium'>Add Pet Products</h1>
                </div>
              </div>

              {/* Add Adopt Pet Card */}
              <div className='col-span-1 rounded-3xl  bg-backgroundColor ml-5 shadow-md  hover:bg-textYellowColor'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-3xl overflow-hidden border border-textDarkBrown'>
                    <Link to='/addpetforadopt'>
                      <img src={adoptImg} /></Link>
                  </div>
                  <h1 className=' text-lg text-textDarkBrown mt-8 mx-auto font-medium'>Add Pets for Adopt</h1>
                </div>
              </div>

              {/* Add chart Card */}
              <div className='col-span-2 rounded-3xl  bg-chartColor border border-textYellowColor ml-5 mr-5 shadow-md'>
                <div className='p-5 flex flex-col'>
                  <h1 className=' text-lg text-textDarkBrown mt-8 mx-auto font-medium'>Chart</h1>
                  <canvas id='myChart' width='400' height='200'></canvas>
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
