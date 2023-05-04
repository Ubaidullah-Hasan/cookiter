import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chefsection/ChefCard/ChefCard';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <Container>
            {
                chefs.map(chef => <ChefCard
                    key={chef.id}
                    chef={chef}
                >
                </ChefCard>)
            }
        </Container>
    );
};

export default Home;