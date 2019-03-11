import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react'
import MainHeader from './MainHeader';
import Cart from './Cart';
import PizzaMenu from './PizzaMenu';
import CustomizePizza from './CustomizePizza';

export default function MainContent() {
    const [ visibleCart, toggleCart ] = useState(true);
    const onToggleCart = () => toggleCart(!visibleCart);

    return (
        <div className='main-content'>
            <MainHeader onToggleCart={onToggleCart} />
            <Sidebar.Pushable>
                <Sidebar
                    animation='overlay'
                    className='cart-sidebar'
                    direction='right'
                    icon='labeled'
                    vertical='true'
                    visible={visibleCart}
                    width='wide'
                >
                    <Cart onToggleCart={onToggleCart} />
                </Sidebar>
                <Sidebar.Pusher>
                    <Route exact path='/' component={PizzaMenu} />
                    <Route exact path='/:pizzaSize' component={CustomizePizza} />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
}
