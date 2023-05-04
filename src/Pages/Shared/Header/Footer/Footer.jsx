import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "./Footer.css"
import { Toaster, toast } from 'react-hot-toast';

const Footer = () => {
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        toast.success(email + ' email collect!!');
        form.reset();
    }
    return (
        <div className='footer '>
            <div className='text-center py-5'>
                <h1 className='px-md-0 px-5'>Subscribe to My Newsletter</h1>
                <p className='px-md-0 px-4 my-4 my-md-2'>Get access to my latest recipes by joining the weekly newsletter</p>
                <Form className=' d-flex  justify-content-center mt-4' onSubmit={handleForm}>
                    <Form.Group controlId="footerBasicEmail" className='me-3'>
                        <Form.Control required name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="success" type="submit" className='text-white' >
                        Submit
                    </Button>
                    <Toaster />
                </Form>
            </div>
            <Container>
                <div className='py-md-4 py-3 text-center border-top '>
                    <p className='m-0'>© Copyright 2020 - AndroThemes All Rights Reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;