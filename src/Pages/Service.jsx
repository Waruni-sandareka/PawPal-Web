import React from 'react'
import img from "../assets/img/service1.png";
import Button from "../layouts/Button";
import { Link } from 'react-router-dom';
import Heading from '../layouts/Heading';
import img2 from '../assets/img/service2.png';
import img3 from '../assets/img/service3.png';
import Navbar from '../components/Header/Navbar';

const Service = () => {
    return (
        <div className='md:min-h-screen bg-backgroundColor'>
            <div className='w-full top-0 left-0 z-10 fixed shadow-sm'><Navbar /></div>
            <div className="text-center mt-20">
                <Heading title1="Our &nbsp;" title2="services" />
            </div>
            <div className='flex flex-row items-center gap-2 ml-20'>
                <div>
                    <img src={img} alt='img' />
                </div>
                <div className='w-full md:w-2/4 text-justify space-y-5 px-5'>
                    <h2 className= "text-3xl text-textDarkBrown">Premium Pet Food Manufacturer</h2>
                    <p className='mt-4'>
                        Experience the finest in pet nutrition with our premium pet food manufacturing service.
                        We meticulously craft a range of wholesome and nutritious recipes to cater to your beloved furry companions.
                    </p>
                    <div className='mt-30'>
                    <Link to='/' spy={true} smooth={true} duration={500}>
                        <Button title="Read more" />
                    </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center gap-2 ml-36'>
                <div className='w-full md:w-2/4 text-justify space-y-5 px-5'>
                    <h2 className= "text-3xl text-textDarkBrown">Premium Pet Food Manufacturer</h2>
                    <p className='mt-4'>
                        Experience the finest in pet nutrition with our premium pet food manufacturing service.
                        We meticulously craft a range of wholesome and nutritious recipes to cater to your beloved furry companions.
                    </p>
                    <div className='mt-30'>
                    <Link to='/' spy={true} smooth={true} duration={500}>
                        <Button title="Read more" />
                    </Link>
                    </div>
                </div>
                <div>
                    <img src={img2} alt='img' />
                </div>
            </div>
            <div className='flex flex-row items-center gap-2 ml-20'>
                <div>
                    <img src={img3} alt='img' />
                </div>
                <div className='w-full md:w-2/4 text-justify space-y-5 px-5'>
                    <h2 className= "text-3xl text-textDarkBrown">Premium Pet Food Manufacturer</h2>
                    <p className='mt-4'>
                        Experience the finest in pet nutrition with our premium pet food manufacturing service.
                        We meticulously craft a range of wholesome and nutritious recipes to cater to your beloved furry companions.
                    </p>
                    <div className='mt-30'>
                    <Link to='/' spy={true} smooth={true} duration={500}>
                        <Button title="Read more" />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
