import React from 'react';
import { Segment } from 'semantic-ui-react';
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
        </Segment>
    );
}
