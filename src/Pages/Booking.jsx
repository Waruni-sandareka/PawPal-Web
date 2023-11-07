import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        // ... other form fields
        clinicDate: new Date(), // Initialize clinic date to the current date
        clinicTime: '12:00', // Initialize clinic time to 12:00 PM
        // ... other form fields
    });

    const handleDateChange = (date) => {
        setFormData({ ...formData, clinicDate: date });
    };

    const handleTimeChange = (time) => {
        setFormData({ ...formData, clinicTime: time });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form Data:', formData);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                {/* ... Other form fields */}
                <div className='mb-4'>
                    <label>Pet Name:</label>
                    <input
                        type='text'
                        name='petname'
                        id='petname' />
                </div>

                <div className='mb-4'>
                    <label>Pet Age:</label>
                    <input
                        type='text'
                        name='petage'
                        id='petage' />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Clinic Date:</label>
                    <DatePicker
                        selected={formData.clinicDate}
                        onChange={handleDateChange}
                        className="border rounded-md py-2 px-3 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Clinic Time:</label>
                    <TimePicker
                        onChange={handleTimeChange}
                        value={formData.clinicTime}
                        className="border rounded-md py-2 px-3 w-full"
                    />
                </div>


                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default Booking;
