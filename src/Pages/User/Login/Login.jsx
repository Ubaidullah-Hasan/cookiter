import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { loginByemail, createUserByGoogle, createUserByGitHub } = useContext(AuthContext);
    const [error, setError] = useState('');
    // dynamic path set ( private route )
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const runningPath = location.state?.form?.pathname || '/'; 


    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginByemail(email, password)
            .then(result => {
                form.reset();
                console.log(result.user);
                setError('');
                navigate(runningPath);
            })
            .catch(err => {
                setError(err.message);
            })
    }

    // create user by google
    const handleGoogle = () => {
        createUserByGoogle()
            .then(result => {
                console.log(result.user);
                setError('');
                navigate(runningPath);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // create user by GitHub
    const handleGithub = () => {
        createUserByGitHub()
            .then(result => {
                console.log(result.user);
                setError('');
                navigate(runningPath);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    
    return (
        <Container>
            <div className='width-50 border p-5 shadow-lg flex mx-auto my-5'>
                <Form onSubmit={handleForm}>
                    <h2 className='text-center mb-4'>Login</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' required type="password" placeholder="Password" />
                    </Form.Group>

                    {
                        error && <p className='bg-danger bg-opacity-10 p-3 mt-3'>{error}</p>
                    }

                    <Button variant="success" type="submit" className='mt-3 text-white w-100' >
                        Login
                    </Button>
                    <div className='text-center'>
                        <Button variant="primary" onClick={handleGoogle} className='mt-3 me-3' >
                            Google
                        </Button>
                        <Button variant="dark" onClick={handleGithub} className='mt-3' >
                            Github
                        </Button>
                    </div>
                    <p className='m-0 mt-3'>I have no account? <Link to="/register">Register</Link></p>
                </Form>
            </div>
        </Container>
    );
};

export default Login;