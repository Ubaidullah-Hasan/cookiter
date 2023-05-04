import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import userimg from "../../../assets/usericon_img.png";
import Activelink from '../ActiveLink/Activelink';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {
    const { user, logedOut } = useContext(AuthContext);

    // signout 
    const signout = () => {
        logedOut()
            .then(() => {
                toast.success('Successfully Signout!')
                console.log("successfully logout")
            })
            .catch(error => {
                toast(error.message);
            })
    }
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand style={{ width: "160px" }}>
                    <Link to="/"><img className='img-fluid' src={logo} alt="COOKITER" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='mt-3 mt-md-0'>
                    <Nav className="mx-auto text-center">
                        <Activelink to="/">Home</Activelink>
                        <Activelink to="/blog">Blog</Activelink>
                        <Activelink to="/about">About</Activelink>
                    </Nav>
                    {
                        user &&
                        <div className='text-center mt-md-0 mt-3 me-md-3'>
                            <img src={userimg} alt="img" className='img-fluid rounded-circle' style={{ width: "30px", height: "30px" }} />
                        </div>
                    }
                    <Toaster />
                    <div className='text-center mt-md-0 mt-2'>
                        {
                            user ?
                                <button className='btn btn-success btn-sm' onClick={signout}>Logout</button>
                                :
                                <button className='btn btn-success btn-sm'><Link className='text-decoration-none text-white' to='/login'>Login</Link></button>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;