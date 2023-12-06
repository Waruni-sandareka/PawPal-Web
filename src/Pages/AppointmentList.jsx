import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';

const AppointmentList = () => {
    // State to store the appointment data
    const [appointments, setAppointments] = useState([]);

    // Effect to fetch appointment data when the component mounts
    useEffect(() => {
        // Fetch appointment data from your API or backend
        // Replace the API_URL with the actual endpoint
        fetch('API_URL/appointments')
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error('Error fetching appointment data:', error));
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
                                <tr key={appointment.id}>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.type}</td>
                                    <td>{appointment.petId}</td>
                                    <td>
                                        <button onClick={() => handleApprove(appointment.id)}>Approve</button>
                                        <button onClick={() => handleDelete(appointment.id)}>Delete</button>
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
