import React, { Component } from 'react';
import {  Header, Button } from 'semantic-ui-react';

class Cart extends Component {
    render() {
        return (
            <div className='cart-content'>
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

export default Cart;






