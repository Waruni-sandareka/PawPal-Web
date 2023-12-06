import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import AdminHeader from '../components/Header/AdminHeader';

const UserList = () => {
    // State to store the user data
    const [users, setUsers] = useState([]);

    // Effect to fetch user data when the component mounts
    useEffect(() => {
        // Fetch user data from your API or backend
        // Replace the API_URL with the actual endpoint
        fetch('API_URL/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching user data:', error));
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
                                <th className='font-medium'>User Name</th>
                                <th className='font-medium'>User Email</th>
                                <th className='font-medium'>List of Pets Owned</th>
                                <th className='font-medium'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.pets.join(', ')}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
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
