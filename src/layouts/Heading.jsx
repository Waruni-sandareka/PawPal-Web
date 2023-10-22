import React from 'react'

const Heading = (props) => {
  return (
    <div className='flex flex-auto leading-tight justify-center'>
      <h2 className='text-4xl font-semibold text-textDarkBrown'>
        {props.title1}
      </h2>
      <h2 className='text-black font-medium text-4xl'>{props.title2}</h2>
    </div>
  )
}

export default Heading
