import React, { useState } from 'react';

const AddPetForAdopt = () => {
    const [adoptPets, setAdoptPets] = useState([]);
    const [newAdoptPet, setNewAdoptPet] = useState({
        name: '',
        type: '',
        description: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAdoptPet((prevAdoptPet) => ({ ...prevAdoptPet, [name]: value }));
    };

    const handleAddAdoptPet = () => {
        setAdoptPets((prevAdoptPets) => [...prevAdoptPets, newAdoptPet]);
        setNewAdoptPet({
            name: '',
            type: '',
            description: '',
            image: '',
        });
    };

    const handleDeleteAdoptPet = (index) => {
        const updatedAdoptPets = [...adoptPets];
        updatedAdoptPets.splice(index, 1);
        setAdoptPets(updatedAdoptPets);
    };

    return (
        <div className="bg-backgroundColor min-h-screen flex mr-1">
            <div className="container bg-backgroundColor flex-1">
                <div className="flex justify-center">
                    <form className="max-w-md w-full mt-16 border border-textYellowColor rounded-3xl bg-sidebarColor px-8 py-8">
                        <h2 className="text-xl text-textDarkBrown font-medium mb-4 text-center">Add a new pet for adoption</h2>
                        <div className="mb-4 mt-3">
                            <label className="block text-sm font-medium text-gray-600">Adopt Pet Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newAdoptPet.name}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Adopt Pet Type</label>
                            <input
                                type="text"
                                name="type"
                                value={newAdoptPet.type}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full  rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Adopt Pet Description</label>
                            <textarea
                                name="description"
                                value={newAdoptPet.description}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Adopt Pet Image</label>
                            <input
                                type="file"
                                name="image"
                                value={newAdoptPet.image}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full rounded-3xl border border-textYellowColor"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleAddAdoptPet}
                            className="flex justify-center bg-textYellowColor text-black mx-auto px-6 py-2 rounded-3xl mt-10 font-medium hover:bg-black hover:text-white text-sm"
                        >
                            Add Pet
                        </button>
                    </form>
                </div>
            </div>
            <div className=" container mr-20 flex-1">
                <div className="mt-12">
                    <h2 className="text-2xl font-medium mb-4 text-center text-textDarkBrown">Adopt Pet List</h2>
                    <table className="w-full bg-sidebarColor rounded-2xl border-b-2 border-textYellowColor">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Pet Image</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Pet Name</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Pet Description</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Pet Type</th>
                                <th className="py-2 px-4 border-b-2 border-textYellowColor font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adoptPets.map((adoptPet, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{adoptPet.image}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{adoptPet.name}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{adoptPet.description}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">{adoptPet.type}</td>
                                    <td className="py-2 px-4 border-b-2  border-textYellowColor text-center">
                                        <button
                                            onClick={() => handleDeleteAdoptPet(index)}
                                            className="flex justify-center bg-red-500 text-white px-2 py-1 mb-2 rounded-3xl mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button className="flex justify-center bg-blue-400 text-white px-2 py-1 rounded-3xl">Edit</button>
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

export default AddPetForAdopt;
