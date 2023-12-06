import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import axios from 'axios';

const UpcomingAppointments = () => {
  const [pets, setPets] = useState([]); // State variable to hold pets
  const [dayCareAppointments, setDayCareAppointments] = useState([]); // State variable to hold appointments

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

        // Fetch day care appointments for each pet
        const appointmentsPromises = res.data.pets.map((pet) =>
          getDayCareAppointmentDetails(pet.petId)
        );

        // Wait for all promises to resolve
        const appointmentsResponses = await Promise.all(appointmentsPromises);

        // Extract the appointments from each response
        const allAppointments = appointmentsResponses.flatMap(
          (response) => response.dayCareAppointments
        );

        // Update the state with all appointments
        setDayCareAppointments(allAppointments);
      } //else {
      //   alert(res.data.message);\j
      // }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during the request.");
    }
  };

  const getDayCareAppointmentDetails = async (petId) => {
    try {
      const res = await axios.get(`http://localhost:8080/getAppointmentDetailsById/${petId}`);

      if (res.data.code === 1) {
        // Return the response directly
        return res.data;
      } else {
        //alert(res.data.message);
        // Return an empty response in case of an error
        return { dayCareAppointments: [] };
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during the request.");
      // Return an empty response in case of an error
      return { dayCareAppointments: [] };
    }
  };

  useEffect(() => {
    // Fetch pets and their appointments when the component mounts
    getAllPets();
  }, []); // Empty dependency array to ensure it only runs once when the component mounts

  // Filter pets that have upcoming appointments
  const petsWithAppointments = pets.filter((pet) =>
    dayCareAppointments.some((appointment) => appointment.pet.petId === pet.petId)
  );

  return (
    <div className='flex '>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <div className="mt-7 ml-8 mr-7">
            {/* Render the list of pets */}
            {petsWithAppointments.map((pet) => (
              <div key={pet.petId} className=" bg-backgroundColor p-4 mb-4 rounded-md border border-textDarkBrown">
                <h3 className='mt-2 text-red-500 mb-2 '>{pet.name}</h3>
                {/* Render the appointments for each pet */}
                {dayCareAppointments
                  .filter((appointment) => appointment.pet.petId === pet.petId)
                  .map((filteredAppointment) => (
                    <div key={`${pet.petId}-${filteredAppointment.appointmentId}`}>
                      <p>Appointment Type: {filteredAppointment.appointmentType}</p>
                      <p>Appointment Date: {filteredAppointment.appointmentDate}</p>
                      <p>Appointment Time: {filteredAppointment.appointmentTime}</p>
                    </div>
                  ))}
              </div>
            ))}
            {/* Display "No upcoming appointments" alert if there are no pets with upcoming appointments */}
            {petsWithAppointments.length === 0 && (
              <div key="no-appointments" className="bg-backgroundColor p-4 mb-4 rounded-md border border-textDarkBrown">
                <p>No upcoming appointments</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
