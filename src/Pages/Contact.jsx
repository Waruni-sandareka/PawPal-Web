import React from 'react'
import Heading from '../layouts/Heading';
import Button from '../layouts/Button';
import contactImg from '../assets/img/Question.png';

const Contact = () => {
    return (
        <div className='bg-backgroundColor min-h-screen flex flex-col items-center justify-center '>
            <Heading title1="Contact" title2=" Us" />

            <div>
                <form>
                    <div className='flex flex-col'>
                        <input 
                        className='py-3 px-2 rounded-lg transition-all mt-4'
                        type='text' 
                        name='UserName' 
                        id='UserName' 
                        placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <input 
                        className='py-3 px-2 rounded-lg transition-all mt-4'
                        type='text' 
                        name='UserEmail' 
                        id='UserEmail' 
                        placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <input 
                        className='py-3 px-2 rounded-lg transition-all mt-4'
                        type='text' 
                        name='UserNumber' 
                        id='UserNumber' 
                        placeholder='Enter Your Number' />
                    </div>
                    <div className='flex flex-row justify-center'  >
                        <Button title='Send Message'/>
                    </div>

                    <div className='w-full md:w-2/3'>
                        <img src={contactImg} alt='image'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
