import React from 'react';
import Button from "../layouts/Button";
import { Link } from 'react-router-dom';
import img from '../assets/img/home2.png';
import Service from './Service';
import Contact from './Contact';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import "../App.css";


const Home = () => {
    return (

        <div className='min-h-screen lg:min-h-[70vh] flex flex-col lg:flex-row items-center  bg-backgroundColor '>
            <div className='w-full top-0 left-0 z-10 fixed shadow-sm'><Navbar /></div>

            <div className='flex flex-col text-center lg:text-start'>
                <div class="relative overflow-hidden">
                    <div class="absolute oval justify-start ml-0 mt-52"></div>
                    <h1 className=' text mt-52 ml-11'>Welcome!</h1>
                    <h1 className=' text pt-5 mb-28 ml-11 text-textDarkBrown'>All you need under one roof.</h1></div>
                <div className='lg:pl-28 ml-7'>
                    <Link to='/booking'>
                        <Button title='Book Appoinment' />
                    </Link>
                </div>
                <p className='ml-36 mt-5'>Welcome to our pet shop - your one-stop destination for all your furry, <br />
                    feathered, and finned friends!
                </p>

                <div className='lg:ml-auto lg:w-3/6 relative'>
                    <img src={img} alt='img'></img>
                </div>

                <Service />
                <Contact />
                <Footer />
            </div>


        </div>

    );
};

export default Home
