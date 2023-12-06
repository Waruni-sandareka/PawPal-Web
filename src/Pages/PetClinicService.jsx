import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../assets/img/petImg0.png';

const PetClinicService = () => {
  let navigate = useNavigate()

  const [pets, setPets] = useState([]); // Initialize an empty array to store pets
  const [selectedPet, setSelectedPet] = useState(null);
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedPet == null) {
      alert('Please select a pet.');
      return;
    }

    const bookingData = {
      "appointmentType": appointmentType,
      "appointmentDate": appointmentDate,
      "appointmentTime": appointmentTime,
      "pet": selectedPet,
      "urgencyLevel": urgencyLevel,
    };

    try {
      const res = await axios.post("http://localhost:8080/book-clinic-appointment", bookingData);

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

      return (
        <div>
          {pets.map((pet) => (
            <label key={pet.petId} className="flex items-center mb-2">
              <input
                type="radio"
                id={`petId${pet.petId}`}
                name="petId"
                className="mr-4"
                value={pet.petId}
                onChange={(event) => setSelectedPet(pets.find((p) => p.petId === parseInt(event.target.value)))}
              />
              <img src={img} className='w-40 h-30 flex flex-col items-center mx-2"' />
              {pet.name}
            </label>
          ))}
        </div>
      );
      
    }
  };

  return (
    <div className="form bg-backgroundColor relative w-3/5 rounded-lg shadow-lg px-8 py-10 ml-5 flex flex-col items-center">
      <form onSubmit={handleSubmit}>

        {renderPetSelection()}

        <div className="flex flex-col mb-4">
          <label htmlFor="appointmentType" className="text-gray-600 mb-2 block">
            Appointment Type:
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            value={appointmentType}
            onChange={(event) => setAppointmentType(event.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          >
            <option value="Checkup">Checkup</option>
            <option value="Vaccination">Vaccination</option>
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="appointmentDate" className="text-gray-600 mb-2">
            Appointment Date:
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={appointmentDate}
            onChange={(event) => setAppointmentDate(event.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 block"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="appointmentTime" className="text-gray-600 mb-2">
            Appointment Time:
          </label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={appointmentTime}
            onChange={(event) => setAppointmentTime(event.target.value + ":00")}
            className="w-full p-2 rounded-lg border border-gray-300 block"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="urgencyLevel" className="text-gray-600 mb-2 block">
            Urgency Level:
          </label>
          <select
            id="urgencyLevel"
            name="urgencyLevel"
            value={urgencyLevel}
            onChange={(event) => setUrgencyLevel(event.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default PetClinicService;
