import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

const PetsProfile = () => {
  return (
    <div className='flex '>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <div className="flex mt-20 gap-9 ml-10 justify-center mr-10">
            <Link to="/petclinicservice">
              <div className="card bg-textYellowColor flex flex-row">
                <h1>Pet Clinic</h1>
                <p>Get your pet the best possible care at our state-of-the-art pet clinic.</p>
              </div>
            </Link>

            <Link to="/petadoptionservice">
              <div className="card bg-textYellowColor flex-row">
                <h1>Pet Adoption</h1>
                <p>Find your furry soulmate at our pet adoption center.</p>
              </div>
            </Link>

            <Link to="/daycareservice">
              <div className="card bg-textYellowColor flex flex-row">
                <h1>Day Care</h1>
                <p>Keep your pets happy and entertained while you're away with our pet day care services.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetsProfile
