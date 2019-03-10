import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../utils/helpers';

export default function PizzaMenuItem ({ pizza: { name, basePrice, maxToppings } }) {

    return (
        <Segment vertical>
            <h2>{firstLetterCapitalized(name)} Pizza</h2>
            <p>From ${basePrice}</p>
            {maxToppings ?
                <p>Max {maxToppings} toppings</p> :
                <p>Unlimited toppings</p>
            }
            <Button basic as={Link} to={name}>Select</Button>
        </Segment>
    );
}
