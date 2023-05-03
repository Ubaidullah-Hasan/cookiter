import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <Container>
            <div className='width-50 border p-5 shadow-lg flex mx-auto my-5'>
                <Form>
                    <h2 className='text-center mb-4'>Register</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className='mt-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className='mt-3'>
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Photo" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox" className="mt-3">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="success" type="submit" className='mt-3 ' >
                        Register
                    </Button>
                    <p className='m-0 mt-3'>Already have an account? <Link to="/login">Login</Link></p>
                </Form>
            </div>
        </Container>
    );
};

export default Register;