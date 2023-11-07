import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link , useNavigate } from 'react-router-dom';
import registerImg from '../assets/img/Question.png';
import userIcon from '../assets/img/user2.png';
import axios from 'axios';

const Register = () => {

    let navigate=useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { username, email, password } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/register",user);
        navigate("/login");
    }



    return (
        <div className='lg:min-h-[75vh] flex flex-col justify-center lg:flex-row items-center  bg-backgroundColor'>
            <Container className='mt-8 text-center lg:flex justify-center'>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="flex w-4/5 items-center mx-10">
                            <div className='mt-12 object-contain w-4/6 ml-36'>
                                <img src={registerImg} alt='RegisterImg' />
                            </div>
                            <div className='form bg-textYellowColor relative w-3/5 rounded-lg shadow-lg px-8 py-10 ml-5 flex flex-col items-center'>
                                <div className='flex w-16 h-16'>
                                    <img src={userIcon} alt='UserIcon' />
                                </div>
                                <h2 className="text-xl lg:text-2xl text-textDarkBrown font-medium mb-4">Register</h2>
                                <Form onSubmit={(e)=>onSubmit(e)} >
                                    <FormGroup >
                                        <input
                                            className="w-full lg:w-72 mt-3 py-2 px-4  mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                            type={"text"}
                                            placeholder='Username'
                                            name='username'
                                            value={username}
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register

