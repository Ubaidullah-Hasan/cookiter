import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Register.css";
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const { createAccount, createUserByGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')

    // form value
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        console.log(name, email, password, photoUrl);
        createAccount(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // create user by google
    const handleGoogle = () => {
        createUserByGoogle()
        .then(result => {
            console.log(result.user);
            setError('')
        })
        .catch(error => {
            setError(error.message);
        })
    }




    // Chacked box handle
    const [check, setCheck] = useState(false);
    const handleChecked = (event) => {
        const checkValue = event.target.checked;
        setCheck(checkValue);
    }

    return (
        <Container>
            <div className='width-50 border p-5 shadow-lg flex mx-auto my-5'>
                <Form onSubmit={handleForm}>
                    <h2 className='text-center mb-4'>Register</h2>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className='mt-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhoto" className='mt-3'>
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photo' type="text" placeholder="Photo" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox" onClick={handleChecked} className="mt-3">
                        <Form.Check type="checkbox" label={<>Accept {<Link to='/terms'>terms and condition</Link>}</>} />
                    </Form.Group>

                    {
                        error && <p className='bg-danger bg-opacity-10 p-3 mt-3'>{error}</p>
                    }

                    <Button variant="success" type="submit" className='mt-3 w-100' disabled={!check} >
                        Register
                    </Button>
                    <div className='text-center'>
                        <Button variant="primary" onClick={handleGoogle} className='mt-3 me-3' >
                            Google
                        </Button>
                        <Button variant="dark" className='mt-3' >
                            Github
                        </Button>
                    </div>

                    <p className='m-0 mt-3'>Already have an account? <Link to="/login">Login</Link></p>
                </Form>
            </div>
        </Container>
    );
};

export default Register;