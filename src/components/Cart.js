import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Header, Button, Icon, List, Divider } from 'semantic-ui-react';
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
            <div className='cart-content' style={{margin: '1em'}}>
                <Icon
                    name='close'
                    onClick={this.props.toggleShowCart}
                    size='large'
                    style={{ cursor: 'pointer' }}
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
                            <Fragment>
                                <List.Item key={uuid()}>
                                    <Icon
                                        name='close'
                                        onClick={this.onRemoveCartItemClick}
                                        size='small'
                                        id={id}
                                        style={{ cursor: 'pointer', padding: '15px', float: 'right' }}
                                    />
                                    <h3>{firstLetterCapitalized(name)} pizza</h3>
                                    <h5 style={{textDecoration: 'underline'}}>Toppings</h5>
                                    <List>
                                        {selectedToppings.map(({ name }) => <List.Item key={name}>{name}</List.Item>)}
                                    </List>
                                    <h5 style={{textAlign: 'right'}}>Total ${total}</h5>
                                </List.Item>
                                <Divider inverted />
                            </Fragment>
                        ))
                    }</List> :
                    null
                }
                <h2 style={{textAlign: 'right'}}>Total ${total}</h2>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    return { cart };
};

export default connect(mapStateToProps, { removeFromCart })(Cart)
