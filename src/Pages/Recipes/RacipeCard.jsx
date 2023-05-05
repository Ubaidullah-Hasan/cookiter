import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Recipe from './Recipe';

const RacipeCard = ({ id }) => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch(`https://cookiter-server-ubaidullah-hasan.vercel.app/recipies/${id}`)
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);


    return (
        <Container className='my-3 my-md-5'>
            <Row>
                {
                    chefs.map(chef => <Recipe
                        key={chef.id}
                        chef={chef}
                    >
                    </Recipe>)
                }

            </Row>
        </Container>
    );
};

export default RacipeCard;