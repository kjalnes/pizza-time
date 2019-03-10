import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Button, Icon, List } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../utils/helpers';
import uuid from 'uuid';

class Cart extends Component {

    render() {

        const { cart: { cartItems } } = this.props;

        return (
            <div className='cart-content'>
                <Icon
                    name='close'
                    onClick={this.props.toggleShowCart}
                    size='large'
                    style={{ cursor: 'pointer', padding: '15px' }}
                />
                <Header
                    dividing as='h2'
                    inverted
                    textAlign='center'>
                    Cart
                </Header>

                {cartItems.length ?
                    <List divided    inverted >
                        {cartItems.map(({ name, total, selectedToppings }) => (
                            <List.Item key={uuid()}>
                                <h4>{firstLetterCapitalized(name)} pizza</h4>
                                <h5>Toppings</h5>
                                <List>
                                    {selectedToppings.map(({ name }) => <List.Item key={name}>{name}</List.Item>)}
                                </List>
                                <h5>Total ${total}</h5>
                            </List.Item>
                        ))
                    }</List> :
                    null
                }
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    return { cart };
};

export default connect(mapStateToProps)(Cart)
