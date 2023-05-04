import React from 'react';
import "./RecipiesCard.css"
import { Col, Container, Row } from 'react-bootstrap';
import barry from "../../../assets/barry.jpg";
import orange from "../../../assets/orange.jpg";

const RecipiesCard = () => {
    return (
        <div className='my-4 my-md-5'>
            <Container>
                <Row className='g-4'>
                    <Col md={6}>
                        <div className='card-recipies card-recipies1 p-4 p-md-5 rounded text-white'>
                            <button className='btn border border-danger border-2 mt-5 mt-md-0 text-danger fw-bold'>Red food </button>
                            <h1 className='mt-3 mt-md-5'>Fruity World</h1>
                            <p>Entice yourself with delicious fruity meals!</p>
                            <button className='btn bg-danger text-white text-uppercase mt-3 px-4'>View Prices</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='card-recipies card-recipies2 p-4 p-md-5 rounded text-white'>
                            <button className='btn border border-warning border-2 mt-5 mt-md-0 text-warning fw-bold'>Orange food </button>
                            <h1 className='mt-3 mt-md-5'>Green World</h1>
                            <p>Entice yourself with delicious fruity meals!</p>
                            <button className='btn bg-warning text-white text-uppercase mt-3 px-4'>View Prices</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default RecipiesCard;