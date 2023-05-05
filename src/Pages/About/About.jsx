import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-3 my-md-4'>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className='text-center bg-success text-white py-2 py-md-3'>About Us</h1>
                    <Card className='mb-3'>
                        <Image src="/src/assets/about.jpg" alt="About Us" fluid />
                        <Card.Body>
                            <Card.Title>Our Story</Card.Title>
                            <Card.Text>
                                We started out as a small family-owned restaurant in the heart of the city. Over the years, we've grown to become one of the most popular dining destinations in the area, known for our delicious food and warm, welcoming atmosphere.
                            </Card.Text>
                            <Card.Text>
                                Our mission is simple: to provide our customers with high-quality, fresh, and flavorful meals that they won't find anywhere else. We take pride in using only the finest ingredients, sourced locally whenever possible, to create dishes that are as delicious as they are unique.
                            </Card.Text>
                            <Card.Text>
                                In addition to our restaurant, we also offer catering services for events of all sizes. Whether you're planning a small gathering or a large celebration, we can provide delicious food and exceptional service that will impress your guests.
                            </Card.Text>
                            <Card.Text>
                                Thank you for considering us for your dining needs. We look forward to serving you soon!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;