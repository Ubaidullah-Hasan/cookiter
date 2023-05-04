import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaCheckCircle, FaHeart, FaHeartbeat, FaLocationArrow } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';



const ChefCard = ({ chef }) => {
    console.log(chef);
    const { chefPicture, chefName, id, likes, numberOfRecipes, yearsOfExperience, bio } = chef;
    console.log(likes)
    return (
        <Col xs={12} md={6} lg={4} >
            <Card>
                <Card.Img variant="top" src={chefPicture} className='img-fluid' />
                <Card.Body>
                    <div>
                        <Card.Title className='mb-2 pb-2 border-bottom'>{chefName}</Card.Title>

                        <p className='m-0'><FaCheckCircle className='text-success me-2' /> Years of experience: <span className=' fw-bold'> {yearsOfExperience} </span></p>
                        <p> <FaCheckCircle className='text-success me-2' />Numbers of recipes: <span className=' fw-bold'> {numberOfRecipes} </span></p>

                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div>
                        <FaHeart className='text-danger fw-bold'></FaHeart> <span className='fw-semibold ms-1 '>{likes}</span>
                    </div>
                    <Button variant="success" className='rounded-sm shadow'><Link to="/recipes" className='text-white text-decoration-none'>View Recipes <FaLocationArrow className='ms-1' /> </Link></Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ChefCard;