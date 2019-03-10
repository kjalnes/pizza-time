import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import PizzaMenuItem from './PizzaMenuItem';
import { PIZZA_SIZES_QUERY } from '../queries';

export default function PizzaMenu() {
    return (
        <div className='pizza-menu-content'>
            <Header as='h2' textAlign='center'>
                Choose a Pizza
            </Header>
            <hr />
            <Query query={PIZZA_SIZES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading Pizzas..</h4>;
                    if (error) console.log(error);

                    return (
                        <Fragment>
                            {data.pizzaSizes.map(pizza => (
                                <PizzaMenuItem pizza={pizza} key={pizza.name} />
                            ))}
                        </Fragment>
                    );
                }}
            </Query>
        </div>
    );
}
