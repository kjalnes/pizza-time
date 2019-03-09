import React, { Fragment } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../utils/helpers';

export default function PizzaDetails({ pizza }) {
    const { name, basePrice, maxToppings, toppings } = pizza;
    const { defaultSelected, topping } = toppings;

    return (
        <Fragment>
            <Header as='h2' textAlign='center'>
                Customize your {firstLetterCapitalized(name)} Pizza
            </Header>
            <hr />
            <Segment vertical>
                <p>From ${basePrice}</p>
                {maxToppings ?
                    <p>Max {maxToppings} toppings</p> :
                    <p>Unlimited toppings</p>
                }
            </Segment>
        </Fragment>
    );
}


// basePrice,
// name,
// maxToppings,
// basePrice
// toppings {
//     defaultSelected
//     topping {
//         name
//         price
//     }
// }
