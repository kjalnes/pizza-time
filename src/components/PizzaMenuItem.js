import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../utils/helpers';

const PizzaMenuItem = ({ pizza }) => {
    return (
        <Segment vertical>
            <h2>{firstLetterCapitalized(pizza.name)} Pizza</h2>
            <p>From ${pizza.basePrice}</p>
            { pizza && pizza.maxToppings ?
                <p>Max {pizza.maxToppings} toppings</p> :
                <p>Unlimited toppings</p>
            }

        </Segment>
    );
}

export default PizzaMenuItem;



