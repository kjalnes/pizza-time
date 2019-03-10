import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Header, Button, Icon, List } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../utils/helpers';
import { removeFromCart } from '../redux/actions';

class Cart extends Component {
    state = {}

    onRemoveCartItemClick = (ev, data) => {
        const { id } = data;
        const { removeFromCart } = this.props;
        removeFromCart({ id });
    }

    render() {

        const { cart: { cartItems, total } } = this.props;

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
                    <List>
                        {cartItems.map(({ name, total, selectedToppings, id }) => (
                            <List.Item key={uuid()}>
                                <Icon
                                    name='close'
                                    onClick={this.onRemoveCartItemClick}
                                    size='small'
                                    id={id}
                                    style={{ cursor: 'pointer', padding: '15px' }}
                                />
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
                <h2>Total ${total}</h2>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    return { cart };
};

export default connect(mapStateToProps, { removeFromCart })(Cart)
