import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import axios from 'axios';
import petImg from '../assets/img/petImg0.png';


const textStyles = 'ml-5 mt-1 py-1 px-2 pr-3 mx-auto text-base lg:text-sm border border-textDarkBrown rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown';

const PetsProfile = () => {
  const [pets, setPets] = useState([]); // State variable to hold pets

  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const user = getUserFromLocalStorage();
  const userId = user.userId;

  const getAllPets = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/getAllPets/${userId}`);

      if (res.data.code === 1) {
        // Update the state with the list of pets
        setPets(res.data.pets);
        console.log(res.data.pets);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during the request.");
    }
  };

  useEffect(() => {
    // Fetch pets when the component mounts
    getAllPets();
  }, []); // Empty dependency array to ensure it only runs once when the component mounts

  return (
    <div className='flex '>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <div className="flex mt-7 gap-9 ml-8 justify-center mr-7">
            {/* Render the list of pets */}
            {pets.map((pet) => (
              <div key={pet.petId} className="bg-backgroundColor p-4 mb-4 rounded-md border border-textDarkBrown">
                <img src={petImg}/>
                <h3 className='mt-2 text-red-500 mb-2'>{pet.name}</h3>
                <p>Type: {pet.type}</p>
                <p>Breed : {pet.breed}</p>
                <p>Weight : {pet.weight}</p>
                <p>Sex : {pet.sex}</p>
                <p>Size : {pet.size}</p>
                <p>Age : {pet.age}</p>
                <p>Energy Level : {pet.energyLevel}</p>
                <p>Medication Type : {pet.medicationType}</p>
                <p>House Trained ? : {pet.isHouseTrained ? 'Yes' : 'No'}</p>
                <p>Friendly with Children ? : {pet.isFriendlyWithChildren ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsProfile;
