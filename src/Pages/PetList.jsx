import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';

const PetList = () => {
    // State to store the user data
    const [pets, setPets] = useState([]);

    // Effect to fetch user data when the component mounts
    useEffect(() => {
        // Fetch user data from your API or backend
        // Replace the API_URL with the actual endpoint
        fetch('API_URL/pets')
            .then(response => response.json())
            .then(data => setPets(data))
            .catch(error => console.error('Error fetching pet data:', error));
    }, []);

    return (
        <div className='flex bg-backgroundColor'>
            <div className='grid grid-cols-5'>
                <div className='col-span-1'><AdminSidebar /></div>
                <div className='col-span-4 w-full'>
                    <AdminHeader />
                    <table className='w-5/6 mt-10 ml-24 border-b-2 border-textYellowColor'>
                        <thead>
                            <tr>
                                <th className='font-medium'>Pet Name</th>
                                <th className='font-medium'>Pet Type</th>
                                <th className='font-medium'>Pet Owner email</th>
                                <th className='font-medium'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map(pet => (
                                <tr key={pet.id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>{pet.useremail}</td>
                                    <td>
                                        <button onClick={() => handleEdit(pet.id)}>Edit</button>
                                        <button onClick={() => handleDelete(pet.id)}>Delete</button>
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

export default PetList;
