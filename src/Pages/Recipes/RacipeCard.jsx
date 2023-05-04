import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Recipe from './Recipe';

const RacipeCard = ({ id }) => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/recipies/${id}`)
        .then(res => res.json())
        .then(data => setChefs(data))
}, [])
console.log(chefs)
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