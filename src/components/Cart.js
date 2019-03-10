import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

export default class Cart extends Component {
    render() {
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}
