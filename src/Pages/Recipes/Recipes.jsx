import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaCheckCircle, FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RacipeCard from './RacipeCard';

const Recipes = () => {
    const chef = useLoaderData();
    console.log(chef);

    const { chefPicture, chefName, id, likes, numberOfRecipes, yearsOfExperience, bio } = chef;
    console.log(likes)

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} >
                        <Card>
                            <Card.Img variant="top" src={chefPicture} className='img-fluid' />
                            <Card.Body>
                                <div>
                                    <Card.Title className='mb-2 pb-2 border-bottom fs-3 fw-bold'>{chefName}</Card.Title>
                                    <p>{bio}</p>

                                    <p className='m-0'><FaCheckCircle className='text-success me-2' /> Years of experience: <span className=' fw-bold'> {yearsOfExperience} </span></p>
                                    <p> <FaCheckCircle className='text-success me-2' />Numbers of recipes: <span className=' fw-bold'> {numberOfRecipes} </span></p>

                                </div>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <FaHeart className='text-danger fw-bold'></FaHeart> <span className='fw-semibold ms-1 '>{likes}</span>
                                </div>

                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            <RacipeCard id={id}> </RacipeCard>
        </div>
    );
};

export default Recipes;