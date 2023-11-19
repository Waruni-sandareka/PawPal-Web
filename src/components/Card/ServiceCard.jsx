import React from 'react';

const Card = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>Card Title</h2>
      </div>
      <div className='card-body'>
        <p>This is the card content.</p>
      </div>
      <div className='card-footer'>
        <button>Action</button>
      </div>
    </div>
  );
};

export default Card;