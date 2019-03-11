import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Header, Segment, Button } from 'semantic-ui-react';
import Toppings from './Toppings';
import { addToCart } from '../redux/actions';
import {
    firstLetterCapitalized,
    getDefaultToppings,
    getInitialPrice,
    formatPrice
} from '../pureFunctions';

function PizzaDetails(props) {
    const {
        pizza: {
            basePrice,
            maxToppings,
            name,
            toppings
        }
    } = props;
    const defaultToppings = getDefaultToppings(toppings);
    const initialTotal = getInitialPrice(basePrice, defaultToppings);
    const [ selectedToppings, updateSelectedToppings ] = useState(defaultToppings);
    const [ total, updateTotal ] = useState(initialTotal);
    const maxToppingsReached = maxToppings === selectedToppings.length;

    const addTopping = (name, price) => {
        updateSelectedToppings(selectedToppings.concat({ name, price }));
        updateTotal(total + price);
    };

    const removeTopping = (name, price) => {
        updateSelectedToppings(selectedToppings.filter(topping => topping.name !== name));
        updateTotal(total - price);
    };

    const onCheckBoxChange = (ev, data) => {
        const { checked, label, price } = data;

        if (checked) {
            addTopping(label, price);
        } else {
            removeTopping(label, price);
        }
    };

    const onAddToCartClick = () => {
        const { pizza: { name }, addToCart, history } = props;
        const id = uuid();

        const pizzaDetails = {
            name,
            id,
            selectedToppings,
            total: formatPrice(total)
        };

        addToCart(pizzaDetails);
        history.push('/');
    };

    return (
        <Fragment>
            <Header as='h2' textAlign='center'>
                Customize your {firstLetterCapitalized(name)} Pizza
            </Header>
            <hr />
            <Segment vertical>
                <p>From ${basePrice}</p>
                {maxToppings ?
                    <p>Add maximum {maxToppings} toppings</p> :
                    <p>Hurray! Unlimited toppings</p>
                }
            </Segment>
            <Toppings
                toppings={toppings}
                maxToppingsReached={maxToppingsReached}
                onCheckBoxChange={onCheckBoxChange}
                selectedToppings={selectedToppings}
            />
            <div style={{ textAlign: 'right '}}>
                <h3>Total price for pizza ${total.toFixed(2)}</h3>
                <Button basic size='large' onClick={onAddToCartClick}>
                    Add to cart
                </Button>
            </div>
        </Fragment>
    );
}

export default withRouter(connect(null, { addToCart })(PizzaDetails));
