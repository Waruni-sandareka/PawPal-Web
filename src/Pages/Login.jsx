import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button, Nav } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/img/loginimg.png';
import userIcon from '../assets/img/user2.png';
import axios from 'axios';
import Navbar from '../components/Header/Navbar';

const Login = () => {

    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const { email, password } = credentials

    const onInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });

    }

    // Set the user object in localStorage
    const setUserInLocalStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    // Get the user object from localStorage
    const getUserFromLocalStorage = () => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    };

    


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/sign-in", credentials);
            if (res.data.user === null) {
                alert(`Error: ${res.data.message}`);
            }
            else {
                if (res.data.code === 1) {
                    alert(res.data.message);

                    // Save the user object in localStorage
                    setUserInLocalStorage(res.data.user);


                    navigate("/userdashboard");
                }
                else {
                    alert(`Error: ${res.data.message}`);
                }
            }

        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during the request.");

        }
    }

    return (

        <div className='min-h-screen flex flex-col lg:flex-row items-center bg-backgroundColor'>

            <div className='w-full top-0 left-0 z-10 fixed shadow-md'><Navbar /></div>

            <div className='flex flex-row justify-content: center items-center h-80vh mt-24 ml-72'>
                <div className=' object-contain w-3/6'>
                    <img src={loginImg} alt='LoginImg' />
                </div>
                <div className='form bg-textYellowColor relative w-3/5 rounded-lg shadow-lg px-8 py-10 ml-5 flex flex-col items-center'>
                    <div className='flex w-16 h-16'>
                        <img src={userIcon} alt='UserIcon' />
                    </div>
                    <h2 className="text-xl lg:text-2xl text-textDarkBrown font-medium mb-4">Login</h2>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <FormGroup>
                            <input
                                className="w-full lg:w-72 mt-3 py-2 px-4  mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type={"text"}
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <input
                                className="w-full lg:w-72 mt-2 py-2 px-4 mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type={'password'}
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={(e) => onInputChange(e)} />
                        </FormGroup>
                        <div className='flex flex-col items-center'>
                            <Button
                                className="mt-5 flex justify-center bg-amber-100 hover:bg-amber-200 text-black py-2 px-6 rounded-2xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                type='submit'>
                                Login
                            </Button>
                        </div>
                    </Form>
                    <p className='mt-3 font-light text-xs'>Don't have an account? <br></br> <Link to='/register' className='cursor-pointer text-textDarkBrown hover:underline'>Create Account</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login
