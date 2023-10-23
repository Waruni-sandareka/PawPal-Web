import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import loginImg from '../assets/img/loginimg.png';
import userIcon from '../assets/img/user2.png';
const Login = () => {

    const [creadentials, setCredentials] = useState({
        email:undefined,
        password: undefined
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = e => {
        e.preventDefault()
    };



  return<section>
    <Container>
        <Row>
            <Col lg='8' className='m-auto'>
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={loginImg} alt='LoginImg'/>
                    </div>
                    <div className='form'>
                        <div className='user'>
                            <img src={userIcon} alt='UserIcon'/>
                        </div>
                        <h2>Login</h2>
                        <Form>
                            <FormGroup>
                                <input type='text' placeholder='Email' required id='email' onChange={handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                            </FormGroup>
                            <Button type='submit'>
                                Login
                            </Button>
                        </Form>
                        <p>Don't have an account? <Link to='register' spy={true} smooth={true} duration={500} className='cursor-pointer'>Create Account</Link></p>
                    </div>
                </div>

            </Col>
        </Row>
    </Container>
  </section>
};

export default Login
