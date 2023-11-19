import React, { useState } from 'react';


const PetClinicService = () => {
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      petName,
      breed,
      age,
      appointmentType,
      appointmentDate,
      appointmentTime,
    };

    console.log(bookingData);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center p-10 border rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold text-gray-700 mb-4'>Book an Appointment</h2>

      <div className='flex flex-col mb-4'>
        <label htmlFor="petName" className='text-gray-600 mb-2'>Pet Name:</label>
        <input
          type="text"
          id="petName"
          name="petName"
          value={petName}
          onChange={(event) => setPetName(event.target.value)}
          className='w-full p-2 rounded-lg border border-gray-300'
        />
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="breed" className='text-gray-600 mb-2'>Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          className='w-full p-2 rounded-lg border border-gray-300'
        />
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="age" className='text-gray-600 mb-2'>Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className='w-full p-2 rounded-lg border border-gray-300'
        />
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="appointmentType" className='text-gray-600 mb-2'>Appointment Type:</label>
        <select
          id="appointmentType"
          name="appointmentType"
          value={appointmentType}
          onChange={(event) => setAppointmentType(event.target.value)}
          className='w-full p-2 rounded-lg border border-gray-300'
        >
          <option value="Checkup">Checkup</option>
          <option value="Vaccination">Vaccination</option>
          <option value="Grooming">Grooming</option>
          <option value="Boarding">Boarding</option>
        </select>
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="appointmentDate" className='text-gray-600 mb-2'>Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={appointmentDate}
          onChange={(event) => setAppointmentDate(event.target.value)}
          className='w-full p-2 rounded-lg border border-gray-300'
        />
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="appointmentTime" className='text-gray-600 mb-2'>Appointment Time:</label>
        <input
          type="time"
          id="appointmentTime"
          name="appointmentTime"
          value={appointmentTime}
          onChange={(event) => setAppointmentTime(event.target.value)}
          className='w-full p-2 rounded-lg border border-gray-300'
        />
      </div>

      <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700'>Book Appointment</button>
    </form>
  );
};

export default PetClinicService;








