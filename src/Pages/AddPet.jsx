import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

// Replace the following with your actual styles
const formStyles = 'your-form-styles';
const headingStyles = 'your-heading-styles';
const inputGroupStyles = 'your-input-group-styles';
const labelStyles = 'your-label-styles';
const inputStyles = 'your-input-styles';

const AddPet = () => {
  const [petImage, setPetImage] = useState('');
  const [petType, setPetType] = useState('');
  const [petName, setPetName] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petSize, setPetSize] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [houseTrained, setHouseTrained] = useState('Yes');
  const [friendlyWithChildren, setFriendlyWithChildren] = useState('Yes');
  const [careInfo, setCareInfo] = useState({
    pottyBreakfastSchedule: 'Morning',
    energyLevel: 'Moderate',
    feedingSchedule: 'Twice a day',
    canBeLeftAlone: 'Up to 4 hours',
    medicationType: ['None'],
    additionalNotes: '',
  });

  const handleHouseTrainedChange = (event) => {
    setHouseTrained(event.target.value);
  };

  const handleFriendlyWithChildrenChange = (event) => {
    setFriendlyWithChildren(event.target.value);
  };

  const handleCareInfoChange = (event) => {
    const { name, value } = event.target;

    setCareInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const petData = {
      petImage,
      petType,
      petName,
      petWeight,
      petSize,
      petAge,
      petBreed,
      houseTrained,
      friendlyWithChildren,
      careInfo,
    };

    console.log(petData);
    // Add logic to send the petData to the server or perform further actions
  };

  return (
    <div className='flex'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 w-full'>
          <Header />
          <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center p-10 border rounded-lg shadow-md'>
              <h2 className={headingStyles}>Pet Care Booking</h2>

              <div className={inputGroupStyles}>
                <label htmlFor="petImage" className='text-gray-600 mb-2'>
                  Pet Image:
                </label>
                <input
                  type="file"
                  id="petImage"
                  name="petImage"
                  onChange={(event) => setPetImage(event.target.value)}
                  className={inputStyles}
                />
              </div>

              <div className={inputGroupStyles}>
                <label htmlFor="petType" className='text-gray-600 mb-2'>
                  Pet Type:
                </label>
                <select
                  id="petType"
                  name="petType"
                  value={petType}
                  onChange={(event) => setPetType(event.target.value)}
                  className={inputStyles}
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="petName" className='text-gray-600 mb-2'>
                  Pet Name:
                </label>
                <input
                  type="text"
                  id="petName"
                  name="petName"
                  value={petName}
                  onChange={(event) => setPetName(event.target.value)}
                  className={inputStyles}
                />
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="petWeight" className='text-gray-600 mb-2'>
                  Pet Weight:
                </label>
                <input
                  type="number"
                  id="petWeight"
                  name="petWeight"
                  value={petWeight}
                  onChange={(event) => setPetWeight(event.target.value)}
                  className={inputStyles}
                />
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="petSize" className='text-gray-600 mb-2'>
                  Pet Size:
                </label>
                <select
                  id="petSize"
                  name="petSize"
                  value={petSize}
                  onChange={(event) => setPetSize(event.target.value)}
                  className={inputStyles}
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="X-Large">X-Large</option>
                </select>
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="petAge" className='text-gray-600 mb-2'>
                  Pet Age:
                </label>
                <input
                  type="number"
                  id="petAge"
                  name="petAge"
                  value={petAge}
                  onChange={(event) => setPetAge(event.target.value)}
                  className={inputStyles}
                />
              </div>

              {/* Add more form elements as needed... */}

              <div className='flex flex-col mb-4'>
                <label htmlFor="houseTrained" className='text-gray-600 mb-2'>
                  House Trained:
                </label>
                <select
                  id="houseTrained"
                  name="houseTrained"
                  value={houseTrained}
                  onChange={handleHouseTrainedChange}
                  className={inputStyles}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="friendlyWithChildren" className='text-gray-600 mb-2'>
                  Friendly with Children:
                </label>
                <select
                  id="friendlyWithChildren"
                  name="friendlyWithChildren"
                  value={friendlyWithChildren}
                  onChange={handleFriendlyWithChildrenChange}
                  className={inputStyles}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Add more form elements as needed... */}

              <button type="submit">Submit</button>
            </form>
          </div>
          </div>
          </div>
        </div>
        );
};

        export default AddPet;
