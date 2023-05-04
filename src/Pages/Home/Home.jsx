import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chefsection/ChefCard/ChefCard';
import Slider from '../Slider/Slider';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <>
            <Slider></Slider>
            <Container>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    >
                    </ChefCard>)
                }
            </Container>
        </>
    );
};

export default Home;