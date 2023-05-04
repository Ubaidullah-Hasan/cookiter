import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import { Toaster, toast } from 'react-hot-toast';


const Recipe = ({ chef }) => {
    console.log(chef)
    const { image, name, rating, cooking_method } = chef;

    const [love, setLove] = useState(false);
    const handleLove = () => {
        setLove(true);
        toast.success('Added Favourite ')
    }

    return (
        <Col xs={12} md={6} lg={4} >
            <Card>
                <Card.Img variant="top" src={image} className='img-fluid' />
                <Card.Body>
                    <div>
                        <button className='btn border-danger text-danger btn-sm my-3 ' style={{ cursor: "initial"}}>{cooking_method}</button>
                        <Card.Title className='mb-2 pb-2'>{name}</Card.Title>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Toaster />
                    <div className='d-flex align-items-center justify-content-between'>
                        <button className='btn p-0 border-0' disabled={love}>
                            <FaHeart onClick={handleLove} className={`${love && 'text-danger'} fw-bold`} ></FaHeart>
                        </button>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating)}
                            readOnly
                            className='text-danger'
                        />
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipe;