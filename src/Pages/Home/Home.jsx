import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chefsection/ChefCard/ChefCard';
import Slider from '../Slider/Slider';
import Testemonial from '../Shared/Testimonial/Testemonial';
import RecipiesCard from '../Shared/RecipiesCard/RecipiesCard';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <>
            <Slider></Slider>

            <Container className='my-4 my-md-5'>
                <Row className='g-3'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        >
                        </ChefCard>)
                    }
                </Row>
            </Container>

            <Testemonial></Testemonial>

            <RecipiesCard></RecipiesCard>
        </>
    );
};

export default Home;