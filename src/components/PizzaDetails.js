import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Button } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../utils/helpers';
import Toppings from './Toppings';
import { addToCart } from '../redux/actions';

const getToppings = (toppings) => {
    return toppings.reduce((selected, toppingData) => {

        if (toppingData.defaultSelected) {
            selected.push(toppingData.topping);
        }
        return selected;
    }, []);
};

// Calculates pizza price including the default selected toppings
const getInitialPrice = (basePrice, toppings) => {
    return basePrice + toppings.reduce((total, topping) => total + topping.price, 0);
};

class PizzaDetails extends Component {
    constructor(props) {
        super(props);
        const { pizza } = props;
        const selectedToppings = getToppings(pizza.toppings);
        const total = getInitialPrice(pizza.basePrice, selectedToppings);

        this.state = {
            selectedToppings,
            total,
            maxToppings: pizza.maxToppings
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
        const { selectedToppings } = this.state;
        const { checked, label, price } = data;

        if (checked) {
            this.setState(this.addTopping(label, price));
        } else {
            this.setState(this.removeTopping(label, price));
        }
    }

    onAddToCartClick = () => {
        const { selectedToppings, total } = this.state;
        const { name, addToCart } = this.props;

        const pizzaDetails = {
            name,
            selectedToppings,
            total
        };

        addToCart(pizzaDetails);
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
                    toppingIsSelected={this.toppingIsSelected}
                />
                <hr />
                <h4>Total price for pizza ${total}</h4>
                <Button onClick={this.onAddToCartClick}>Add to cart</Button>
            </Fragment>
        );
    }
}


export default connect(null, { addToCart })(PizzaDetails)
