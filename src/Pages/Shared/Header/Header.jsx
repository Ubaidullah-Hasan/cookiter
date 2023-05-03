import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import user from "../../../assets/usericon_img.png";
import Activelink from '../ActiveLink/Activelink';

const Header = () => {
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand style={{ width: "160px" }}>
                    <Link to="/"><img className='img-fluid' src={logo} alt="COOKITER" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='mt-3 mt-md-0'>
                    <Nav className="mx-auto">
                        <Activelink to="/">Home</Activelink>
                        <Activelink to="/blog">Blog</Activelink>
                        <Activelink to="/about">About</Activelink>
                    </Nav>
                    <div className='text-center mt-md-0 mt-3 me-md-3'>
                        <img src={user} alt="img" className='img-fluid rounded-circle' style={{width:"30px", height:"30px"}} />
                    </div>
                    <div className='text-center mt-md-0 mt-2'>
                        <button className='btn btn-success btn-sm'><Link className='text-decoration-none text-white' to='/login'>Login</Link></button>
                        <button className='btn btn-success btn-sm'>Logout</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;