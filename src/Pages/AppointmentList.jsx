import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';
import axios from 'axios';

const AppointmentList = () => {
    // State to store the appointment data
    const [appointments, setAppointments] = useState([]);

    const getAllAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getAllAppointmentList');
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // Effect to fetch appointment data when the component mounts
    useEffect(() => {
        // Call the function to fetch user data
        getAllAppointments();
    }, []);

    // Function to handle appointment deletion
    const handleDelete = (id) => {
        // Implement logic to delete the appointment with the given id
        // Update the state accordingly
        // For example: make a DELETE request to API
        console.log(`Delete appointment with id ${id}`);
    };

    // Function to handle appointment approval
    const handleApprove = (id) => {
        // Implement logic to approve the appointment with the given id
        // Update the state accordingly
        // For example: make a PATCH request to API
        console.log(`Approve appointment with id ${id}`);
    };

    return (
        <div className='flex bg-backgroundColor'>
            <div className='grid grid-cols-5'>
                <div className='col-span-1'><AdminSidebar /></div>
                <div className='col-span-4 w-full'>
                    <AdminHeader />
                    <table className='w-5/6 mt-10 ml-24 border-b-2 border-textYellowColor'>
                        <thead>
                            <tr>
                                <th className='font-medium'>Appointment Date</th>
                                <th className='font-medium'>Appointment Time</th>
                                <th className='font-medium'>Appointment Type</th>
                                <th className='font-medium'>Pet ID</th>
                                <th className='font-medium'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map(appointment => (
                                <tr key={appointment.appointmentId}>
                                    <td>{appointment.appointmentDate}</td>
                                    <td>{appointment.appointmentTime}</td>
                                    <td>{appointment.appointmentType}</td>
                                    <td>{appointment.pet.petId}</td>
                                    <td>
                                        <button className='mr-4 rounded-3xl text-black bg-green-400 px-4 py-2 mt-3 hover:text-white hover:bg-black' onClick={() => handleApprove(appointment.id)}>Approve</button>
                                        <button className='rounded-3xl text-black bg-red-400 px-4 py-2 mt-3 hover:text-white hover:bg-black' onClick={() => handleDelete(appointment.id)}>Decline</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;
