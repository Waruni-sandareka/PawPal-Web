import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/img/Question.png';
import userIcon from '../assets/img/user2.png';
import axios from 'axios';
import Navbar from '../components/Header/Navbar';

const Register = () => {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const { firstName, lastName, email, password } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{8,}$/;
        return regex.test(password);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (!isEmailValid) {
            alert('Invalid email format');
            return;
        }

        if (!isPasswordValid) {
            alert('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character');
            return;
        }

        try {
            const res = await axios.post("http://localhost:8080/sign-up", user);

            if (res.data.code === 1) {
                alert(res.data.message);
                navigate("/login");
            } else {
                alert(`Error: ${res.data.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during the request.");
        }
    }


    return (

        <div className='lg:min-h-[100vh] flex flex-col justify-center lg:flex-row items-center  bg-backgroundColor'>

            <div className='w-full top-0 left-0 z-10 fixed shadow-md'><Navbar /></div>
            <div className="flex w-auto items-center mt-36 mr-40">
                <div className='mt-12 object-contain w-4/6 ml-36'>
                    <img src={registerImg} alt='RegisterImg' className='flex' />
                </div>
                <div className='form bg-textYellowColor relative w-3/5 rounded-lg shadow-lg px-8 py-10 ml-5 flex flex-col items-center'>
                    <div className='flex w-16 h-16'>
                        <img src={userIcon} alt='UserIcon' />
                    </div>
                    <h2 className="text-xl lg:text-2xl text-textDarkBrown font-medium mb-4">Register</h2>
                    <Form onSubmit={(e) => onSubmit(e)} >
                        <FormGroup >
                            <input
                                className="w-full lg:w-72 mt-3 py-2 px-4  mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type={"text"}
                                placeholder='First Name'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => onInputChange(e)} />
                        </FormGroup>
                        <FormGroup >
                            <input
                                className="w-full lg:w-72 mt-3 py-2 px-4  mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type={"text"}
                                placeholder='Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={(e) => onInputChange(e)} />
                        </FormGroup>
                        <FormGroup>
                            <input
                                className="w-full lg:w-72 mt-3 py-2 px-4  mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type={"text"}
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)} />
                        </FormGroup>
                        <FormGroup>
                            <input
                                className="w-full lg:w-72 mt-2 py-2 px-4 mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type={"password"}
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={(e) => onInputChange(e)} />
                        </FormGroup>
                        <div className='flex flex-col items-center'>
                            <Button
                                className="mt-5 flex justify-center bg-amber-100 hover:bg-amber-200 text-black py-2 px-6 rounded-2xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type='submit'>
                                Register
                            </Button>
                        </div>
                    </Form>
                    <p className='mt-3 font-light text-xs'>Are you already registered? <br></br> <Link to='/login' className='cursor-pointer text-textDarkBrown hover:underline'>Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register

