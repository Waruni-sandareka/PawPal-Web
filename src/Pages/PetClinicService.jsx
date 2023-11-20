import React, { useState } from 'react';

const PetClinicService = () => {
  const [pets, setPets] = useState([]); // Initialize an empty array to store pets
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      appointmentType,
      appointmentDate,
      appointmentTime,
    };

    console.log(bookingData);
  };

  const handleAddPet = () => {
    // Logic to add a new pet to the pets array
  };

  const renderPetSelection = () => {
    if (pets.length === 0) {
      // Display 'Add Pet' button
      return (
        <button onClick={handleAddPet}>Add Pet</button>
      );
    } else {
      // Display a select element to choose from existing pets
      return (
        <select
          id="petId"
          name="petId"
          className="w-full p-2 rounded-lg border border-gray-300"
        >
          {pets.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name}
            </option>
          ))}
        </select>
      );
    }
  };

  return (
    <div className="form bg-textYellowColor relative w-3/5 rounded-lg shadow-lg px-8 py-10 ml-5 flex flex-col items-center">
      <form onSubmit={handleSubmit}>
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
            <option value="Grooming">Grooming</option>
            <option value="Boarding">Boarding</option>
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
            onChange={(event) => setAppointmentTime(event.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 block"
          />
        </div>

        {renderPetSelection()}

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
