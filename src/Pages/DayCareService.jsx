import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../assets/img/petImg0.png';

const DayCareService = () => {
  let navigate = useNavigate()

  const [pets, setPets] = useState([]); // Initialize an empty array to store pets
  const [selectedPet, setSelectedPet] = useState(null);
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [vaccinationConfirmation, setVaccinationConfirmation] = useState(false);
  const [petSupplies, setPetSupplies] = useState([]);


  const availablePetSupplies = ['Food', 'Toys', 'Bedding', 'Leash', 'Collar'];

  const handlePetSupplyChange = (supply) => {
    // Check if the supply is already selected
    const isSupplySelected = petSupplies.includes(supply);

    // If it's selected, remove it; otherwise, add it
    const updatedSupplies = isSupplySelected
      ? petSupplies.filter((item) => item !== supply)
      : [...petSupplies, supply];

    setPetSupplies(updatedSupplies);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedPet == null) {
      alert('Please select a pet.');
      return;
    }

    // Convert petSupplies to an array of objects
    const petSuppliesData = petSupplies.map((supply) => ({
      supplyName: supply,
    }));

    const bookingData = {
      "appointmentType": appointmentType,
      "appointmentDate": appointmentDate,
      "appointmentTime": appointmentTime,
      "pet": selectedPet,
      "vaccinationConfirmation": vaccinationConfirmation,
      "petSupplies": petSuppliesData,
    };

    try {
      const res = await axios.post("http://localhost:8080/book-daycare-appointment", bookingData);

      if (res.data.code === 1) {
        alert(res.data.message);
        navigate("/upcoming");
      } else {
        alert(`Error: ${res.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during the request.");
    }

  };

  const handleVaccinationConfirmationChange = (event) => {
    setVaccinationConfirmation(event.target.value);
  };

  const handleAddPet = () => {
    // Logic to add a new pet to the pets array
  };

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



  const renderPetSelection = () => {
    if (pets.length === 0) {
      // Display 'Add Pet' button
      return (
        <Link to='/addpet'><button onClick={handleAddPet}>Add Pet</button></Link>
      );
    } else {
      // Display a select element to choose from existing pets
      return (
        <div className='flex flex-row mb-6'>
          {pets.map((pet) => (
            <label key={pet.petId} className="flex flex-col items-center mr-4">
              <input
                type="radio"
                id={`petId${pet.petId}`}
                name="petId"
                className="mr-4"
                value={pet.petId}
                onChange={(event) => setSelectedPet(pets.find((p) => p.petId === parseInt(event.target.value)))}
              />
              <img src={img} className='w-40 h-30 mx-2 border border-gray-400 rounded-2xl' />
              {pet.name}
            </label>
          ))}
        </div>
      );
    }
  };


  return (
    <div className={`flex items-center justify-center h-full `}>
      <div className="form flex flex-col items-center justify-center bg-textYellowColor relative w-2/5 rounded-2xl shadow-lg px-8 py-5 mt-4 ">
        <form onSubmit={handleSubmit}>

          {renderPetSelection()}

          <div className="flex flex-col mb-6">
            <label htmlFor="appointmentType" className="text-black mb-2 block">
              Appointment Type:
            </label>
            <select
              id="appointmentType"
              name="appointmentType"
              value={appointmentType}
              onChange={(event) => setAppointmentType(event.target.value)}
              className="w-full p-2 rounded-xl border border-gray-300"
            >
              <option value="Grooming">Grooming</option>
              <option value="Boarding">Boarding</option>
            </select>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="appointmentDate" className="text-black mb-2">
              Appointment Date:
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={appointmentDate}
              onChange={(event) => setAppointmentDate(event.target.value)}
              className="w-full p-2 rounded-xl border border-gray-300 block"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="appointmentTime" className="text-black mb-2">
              Appointment Time:
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={appointmentTime}
              onChange={(event) => setAppointmentTime(event.target.value + ":00")}
              className="w-full p-2 rounded-xl border border-gray-300 block"
            />
          </div>

          <div className='flex flex-row mb-6'>
            <label htmlFor="Select Pet Supplies" className="text-black mb-2">
            Select Pet Supplies:
            </label>
            {availablePetSupplies.map((supply) => (
              <div className='px-3'>
                <input
                  type="checkbox"
                  id={supply}
                  checked={petSupplies.includes(supply)}
                  onChange={() => handlePetSupplyChange(supply)}
                />
                <label htmlFor={supply}>{supply}</label>
              </div>

            ))}
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="vaccinationConfirmation" className="text-black mb-2">
              Vaccination Confirmation:
            </label>
            <select
              id="vaccinationConfirmation"
              name="vaccinationconfirmation"
              value={vaccinationConfirmation}
              onChange={handleVaccinationConfirmationChange}
              className="w-full p-2 rounded-xl border border-gray-300 block"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <button
            type="submit"
            className="flex flex-col justify-center bg-backgroundColor text-black py-2 px-4 rounded-3xl hover:bg-black hover:text-white mt-8"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default DayCareService;

