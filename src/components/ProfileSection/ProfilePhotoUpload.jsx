import React, { useState } from "react";

const ProfilePhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      setImageURL(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='flex flex-col items-center'>
      {selectedImage && (
        <img
          src={imageURL}
          alt="Profile Image"
          className='w-40 h-40 rounded-full object-cover'
        />
      )}
      <div className='flex items-center rounded-full bg-gray-200 p-2 cursor-pointer'> 
        <span className='text-gray-500 text-lg'>+</span>
      <span className='ml-2 text-gray-500 text-sm'>Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className='mt-4 p-2 border rounded-md'
        />
      </div>
    </div>
  );
};

export default ProfilePhotoUpload;