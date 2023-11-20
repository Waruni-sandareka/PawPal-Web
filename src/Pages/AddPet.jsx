import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

// Replace the following with your actual styles
const formStyles = 'flex flex-col items-center justify-center p-10 border rounded-lg mt-20 mx-10 border-b-3 rounded-3xl border-textYellowColor';
const inputGroupStyles = 'block mb-4';
const labelStyles = 'text-black mb-4';
const inputStyles = 'w-full lg:w-40 ml-8 mt-2 py-1 px-4 pr-4 mx-auto text-base lg:text-sm border border-textDarkBrown rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown';

const AddPet = () => {
  const [petImage, setPetImage] = useState('');
  const [petType, setPetType] = useState('');
  const [petName, setPetName] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petSex, setPetSex] = useState('Male');
  const [petSize, setPetSize] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [houseTrained, setHouseTrained] = useState('Yes');
  const [friendlyWithChildren, setFriendlyWithChildren] = useState('Yes');
  const [energyLevel, setEnergyLevel] = useState('');
  const [medicationType, setMedicationType] = useState('');
  
  const handleHouseTrainedChange = (event) => {
    setHouseTrained(event.target.value);
  };

  const handleFriendlyWithChildrenChange = (event) => {
    setFriendlyWithChildren(event.target.value);
  };

  const handlePetSex = (event) => {
    setPetSex(event.target.value);
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
      petSex,
      houseTrained,
      friendlyWithChildren,
      energyLevel,
      medicationType,
      
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

        {/* Form for add pet */}
          <div className='flex'>
            <form onSubmit={handleSubmit} className={formStyles}>
            <div className='grid grid-cols-2'>
              <div className='col-span-1'>
              <div className={inputGroupStyles}>
                <label htmlFor="petImage" className={labelStyles}>
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
                <label htmlFor="petName" className={labelStyles}>
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

              <div className={inputGroupStyles}>
                <label htmlFor="petType" className={labelStyles}>
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

              <div className={inputGroupStyles}>
                <label htmlFor="petBreed" className={labelStyles}>
                  Pet Breed:
                </label>
                <input
                  type="text"
                  id="petBreed"
                  name="petBreed"
                  value={petBreed}
                  onChange={(event) => setPetBreed(event.target.value)}
                  className={inputStyles}
                />
              </div>

              <div className={inputGroupStyles}>
                <label htmlFor="petSex" className={labelStyles}>
                  Pet Sex :
                </label>
                <select
                  id="petSex"
                  name="petSex"
                  value={petSex}
                  onChange={handlePetSex}
                  className={inputStyles}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className={inputGroupStyles}>
                <label htmlFor="petWeight" className={labelStyles}>
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
              </div>

              <div className='cols-span-1'>
              <div className={inputGroupStyles}>
                <label htmlFor="petSize" className={labelStyles}>
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

              <div className={inputGroupStyles}>
                <label htmlFor="petAge" className={labelStyles}>
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

              <div className={inputGroupStyles}>
                <label htmlFor="energyLevel" className={labelStyles}>
                  Energy Level:
                </label>
                <select
                  id="energyLevel"
                  name="energyLevel"
                  value={energyLevel}
                  onChange={(event) => setEnergyLevel(event.target.value)}
                  className={inputStyles}
                >
                  <option value="Small">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Low</option>
                  
                </select>
              </div>

              <div className={inputGroupStyles}>
                <label htmlFor="medicationType" className={labelStyles}>
                  Medication Type:
                </label>
                <select
                  id="medicationType"
                  name="medicationType"
                  value={medicationType}
                  onChange={(event) => setMedicationType(event.target.value)}
                  className={inputStyles}
                >
                  <option value="Pill">Pill</option>
                  <option value="Topical">Topical</option>
                  <option value="Injection">Injection</option>
                  
                </select>
              </div>

              <div className={inputGroupStyles}>
                <label htmlFor="houseTrained" className={labelStyles}>
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

              <div className={inputGroupStyles}>
                <label htmlFor="friendlyWithChildren" className={labelStyles}>
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
              </div>
              </div>
              <button type="submit" className=' mt-8'>Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
