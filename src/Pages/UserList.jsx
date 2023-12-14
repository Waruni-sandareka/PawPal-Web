import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';
import axios from 'axios';

const UserList = () => {
    // State to store the user data
    const [users, setUsers] = useState([]);
    // const [pets, setPets] = useState([]); // State variable to hold pets
    // const [selectedUserId, setSelectedUserId] = useState(null);

    const getAllUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getAllUserList');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // const getAllPets = async (userId) => {
    //     try {
    //         const res = await axios.get(`http://localhost:8080/getAllPets/${userId}`);

    //         if (res.data.code === 1) {
    //             // Update the state with the list of pets
    //             setPets(res.data.pets);
    //             console.log(res.data.pets);
    //         } else {
    //             alert(res.data.message);
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("An error occurred during the request.");
    //     }
    // };

    // Effect to fetch user data when the component mounts
    useEffect(() => {
        // Call the function to fetch user data
        getAllUsers();
    }, []);

    // Effect to fetch pets when the selected user changes
    // useEffect(() => {
    //     if (selectedUserId !== null) {
    //         // Fetch pets for the selected user
    //         getAllPets(selectedUserId);
    //     }
    // }, [selectedUserId]);

    const handleDelete = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/deleteUser/${userId}`);

            if (response.status === 200) {
                // If the deletion is successful, fetch the updated user list
                getAllUsers();
                alert('User deleted successfully');
            } else {
                alert(`Error deleting user: ${response.statusText}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
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
                                <th className='font-medium'>User ID</th>
                                <th className='font-medium'>User Name</th>
                                <th className='font-medium'>User Email</th>
                                {/* <th className='font-medium'>Owned Pets</th> New column */}
                                <th className='font-medium'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.firstName}{" "}{user.lastName}</td>
                                    <td>{user.email}</td>
                                   
                                    {/* <td>
                                        {pets
                                            .filter(pet => pet.userId === user.userId)
                                            .map(pet => (
                                                <div key={pet.petId}>{pet.name}</div>
                                            ))}
                                    </td> */}
                                    <td>
                                        <button className='flex rounded-3xl text-black bg-red-400 px-4 py-2 mt-3 hover:text-white hover:bg-black' onClick={() => handleDelete(user.userId)}>Delete</button>
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

export default UserList;
