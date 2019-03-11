import React from 'react';
import {  Header, Icon } from 'semantic-ui-react';

export default function MainHeader({ onToggleCart }) {
    return (
        <Header className='banner'>
            <h1>It's Pizza Time</h1>
            <Icon
                className='cart-icon'
                inverted
                name='shopping cart'
                onClick={onToggleCart}
                size='large'
            />
        </Header>
    );
}
