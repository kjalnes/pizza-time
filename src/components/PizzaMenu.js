import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PizzaMenuItem from './PizzaMenuItem';

const PIZZA_SIZES_QUERY = gql`
    query pizzaSizesQuery {
        pizzaSizes {
            name
            basePrice
            maxToppings
        }
    }
`;

class PizzaMenu extends Component {
    render() {
        return (
            <div className='pizza-menu-content'>
                <Header as='h2' textAlign='center'>
                    Choose a Pizza
                </Header>
                <hr />
                <Query query={PIZZA_SIZES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading Pizzas..</h4>
                            if (error) console.log(error);

                            return <div>
                                {data.pizzaSizes.map(pizza => (
                                    <PizzaMenuItem pizza={pizza} />
                                ))}
                            </div>
                        }
                    }
                </Query>
            </div>
        );
    }
}

export default PizzaMenu;
