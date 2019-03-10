import React, { Component, Fragment } from 'react';
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

class PizzaDetails extends Component {
    constructor(props) {
        super(props);
        const {
            pizza: {
                toppings,
                basePrice,
                maxToppings
            }
        } = props;
        const selectedToppings = getDefaultToppings(toppings);
        const total = getInitialPrice(basePrice, selectedToppings);

        this.state = {
            selectedToppings,
            total,
            maxToppings
        };
    }

    addTopping = (name, price) => {
        const { selectedToppings, total } = this.state;

        return {
            selectedToppings: selectedToppings.concat({ name, price }),
            total: total + price
        };
    }

    removeTopping = (name, price) => {
        const { selectedToppings, total } = this.state;

        return {
            selectedToppings: selectedToppings.filter(topping => topping.name !== name),
            total: total - price
        };
    }

    onCheckBoxChange = (ev, data) => {
        const { checked, label, price } = data;

        if (checked) {
            this.setState(this.addTopping(label, price));
        } else {
            this.setState(this.removeTopping(label, price));
        }
    }

    onAddToCartClick = () => {
        const { selectedToppings, total } = this.state;
        const { pizza: { name }, addToCart, history } = this.props;
        const id = uuid();

        const pizzaDetails = {
            name,
            id,
            selectedToppings,
            total: formatPrice(total)
        };

        addToCart(pizzaDetails);
        history.push('/');
    }

    render() {
        const { name, basePrice, maxToppings, toppings } = this.props.pizza;
        const { selectedToppings, total } = this.state;
        const maxToppingsReached = maxToppings === selectedToppings.length;

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
                    onCheckBoxChange={this.onCheckBoxChange}
                    selectedToppings={selectedToppings}
                />
                <div style={{ textAlign: 'right '}}>
                    <h3>Total price for pizza ${total.toFixed(2)}</h3>
                    <Button basic size='large' onClick={this.onAddToCartClick}>
                        Add to cart
                    </Button>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(connect(null, { addToCart })(PizzaDetails));
