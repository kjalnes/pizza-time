import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import PizzaDetails from './PizzaDetails';
import { pizzaSizeByName } from '../queries';

export default function CustomizePizza(props) {
    const validPizzaSizes = ['SMALL', 'MEDIUM', 'LARGE'];
    const pizzaSize = props.match.params.pizzaSize.toUpperCase();
    const invalidSize = validPizzaSizes.indexOf(pizzaSize) < 0;

    // If params is not a valid pizza size, redirect to homepage
    if (invalidSize) return <Redirect to='/' />;

    return (
        <div className='pizza-menu-content'>
            <Link to='/'>Back to menu</Link>
            <Query query={pizzaSizeByName(pizzaSize)}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading Pizza Details..</h4>;
                    if (error) console.log(error);

                    return <PizzaDetails pizza={data.pizzaSizeByName} />;
                }}
            </Query>
        </div>
    );
}
