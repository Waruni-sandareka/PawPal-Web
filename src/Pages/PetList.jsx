import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';
import axios from 'axios';

const PetList = () => {
    // State to store the user data
    const [pets, setPets] = useState([]);

    const getAllPets = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getAllPetList');
            setPets(response.data);
        } catch (error) {
            console.error('Error fetching pet data:', error);
        }
    };

    // Effect to fetch user data when the component mounts
    useEffect(() => {
        // Call the function to fetch user data
        getAllPets();
    }, []);


    return (
        <div className='flex bg-backgroundColor'>
            <div className='grid grid-cols-5'>
                <div className='col-span-1'><AdminSidebar /></div>
                <div className='col-span-4 w-full'>
                    <AdminHeader />
                    <table className='w-5/6 mt-10 ml-24 border-b-2 border-textYellowColor justify-center'>
                        <thead>
                            <tr>
                                <th className='font-medium'>Pet ID</th>
                                <th className='font-medium'>Pet Name</th>
                                <th className='font-medium'>Pet Type</th>
                                <th className='font-medium'>Owner Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map(pet => (
                                <tr key={pet.id}>
                                    <td>{pet.petId}</td>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>{pet.user.email}</td>
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
