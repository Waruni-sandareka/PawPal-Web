import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import loginImg from '../assets/img/loginimg.png';
import userIcon from '../assets/img/user2.png';
const Login = () => {

    const [creadentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = e => {
        e.preventDefault()
    };



    return (
        <div className='lg:min-h-[75vh] flex flex-col justify-center lg:flex-row items-center  bg-backgroundColor'>
            <Container className='mt-8 text-center lg:flex justify-center'>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="flex w-4/5 items-center mx-10">
                            <div className='mt-12 object-contain w-3/6 ml-36'>
                                <img src={loginImg} alt='LoginImg' />
                            </div>
                            <div className='form bg-textYellowColor relative w-3/5 rounded-lg shadow-lg px-8 py-10 ml-5 flex flex-col items-center'>
                                <div className='flex w-16 h-16'>
                                    <img src={userIcon} alt='UserIcon' />
                                </div>
                                <h2 className="text-xl lg:text-2xl text-textDarkBrown font-medium mb-4">Login</h2>
                                <Form>
                                    <FormGroup>
                                        <input
                                            className="w-full lg:w-72 mt-3 py-2 px-4  mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                            type='text'
                                            placeholder='Email'
                                            required id='email'
                                            onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            className="w-full lg:w-72 mt-2 py-2 px-4 mx-auto text-base lg:text-sm border border-black rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                            type='password'
                                            placeholder='Password'
                                            required id='password'
                                            onChange={handleChange} />
                                    </FormGroup>
                                    <div className='flex flex-col items-center'>
                                        <Button
                                            className="mt-5 flex justify-center bg-amber-100 hover:bg-amber-200 text-black py-2 px-6 rounded-2xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
                                            type='submit'>
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                                <p className='mt-3 font-light text-xs'>Don't have an account? <br></br> <Link to='/register' spy={true} smooth={true} duration={500} className='cursor-pointer text-textDarkBrown hover:underline'>Create Account</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login
