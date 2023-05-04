import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { loginByemail } = useContext(AuthContext);
    const [error, setError] = useState('');

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
            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <Container>
            <div className='width-50 border p-5 shadow-lg flex mx-auto mt-5'>
                <Form onSubmit={handleForm}>
                    <h2 className='text-center mb-4'>Login</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    {
                        error && <p className='bg-danger bg-opacity-10 p-3 mt-3'>{error}</p>
                    }
                    
                    <Button variant="success" type="submit" className='mt-3 ' >
                        Submit
                    </Button>
                    <p className='m-0 mt-3'>I have no account? <Link to="/register">Register</Link></p>
                </Form>
            </div>
        </Container>
    );
};

export default Login;