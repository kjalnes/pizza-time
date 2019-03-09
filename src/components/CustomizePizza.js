import React from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PizzaDetails from './PizzaDetails';

const generateQuery = (pizzaSize) => {
    return gql`
        query pizzaSizeByNameQuery {
            pizzaSizeByName(name: ${pizzaSize}) {
                basePrice,
                name,
                maxToppings,
                toppings {
                    defaultSelected
                    topping {
                        name
                        price
                    }
                }
            }
        }
    `;
}

export default function CustomizePizza(props) {

    const pizzaSizes = ['SMALL', 'MEDIUM', 'LARGE'];
    const pizzaSize = props.match.params.pizzaSize.toUpperCase();
    const invalidSize = pizzaSizes.indexOf(pizzaSize) < 0;

    // If params is not a valid pizza size, redirect to homepage
    if (invalidSize) return <Redirect to='/' />;

    const PIZZA_SIZE_BY_NAME_QUERY = generateQuery(pizzaSize);

    return (
        <div className='pizza-menu-content'>
            <Query query={PIZZA_SIZE_BY_NAME_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading Pizza Details..</h4>;
                    if (error) console.log(error);

                    return <PizzaDetails pizza={data.pizzaSizeByName} />;
                }}
            </Query>
        </div>
    );
}

