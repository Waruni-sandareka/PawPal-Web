import React from 'react';
import Button from "../layouts/Button";
import { Link } from 'react-router-dom';
import img from '../assets/img/home2.png';
import Service from './Service';
import Contact from './Contact';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';


const Home = () => {
    return (
        
        <div className='min-h-screen lg:min-h-[70vh] flex flex-col justift-center lg:flex-row items-center  bg-backgroundColor'>
         <div className='w-full top-0 left-0 z-10 fixed shadow-md'><Navbar /></div>
            <div className='flex flex-col text-center lg:text-start gap-5 pt-8 mt-18'>
           
                <h1 className='font-medium text-4xl leading-tight pt-8 pl-24 mt-3 ml-7'>Welcome!</h1>
                <h1 className='font-medium text-4xl leading-tight pt-8 pl-24 ml-7'>All you need under one roof.</h1>
                <p className='font-small text-s pt-4 pl-24 ml-7'>Welcome to our pet shop - your one-stop destination for all your furry, <br/>
                    feathered, and finned friends! 
             </p>
                <div className='lg:pl-24 mt-10 ml-7'>
                    <Link to='/booking'>
                        <Button title='Book Appoinment' />
                    </Link>
                </div>
                <div className='lg:ml-auto w-full lg:w-2/5'>
                    <img src={img} alt='img'></img>
                </div>
                <Service/>
                <Contact/>
                <Footer/>
            </div>
         
            
        </div>
        
    );
};

export default Home
