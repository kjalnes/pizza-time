import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react'
import MainHeader from './MainHeader';
import Cart from './Cart';
import PizzaMenu from './PizzaMenu';
import CustomizePizza from './CustomizePizza';

export default class MainContent extends Component {
    state = { visibleCart: true }

    toggleShowCart = () => this.setState({ visibleCart: !this.state.visibleCart })

    render() {
        const { visibleCart } = this.state;

        return (
            <div className='main-content'>
                <MainHeader toggleShowCart={this.toggleShowCart} />
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
                    <Cart toggleShowCart={this.toggleShowCart} />
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Route exact path='/' component={PizzaMenu} />
                        <Route exact path='/:pizzaSize' component={CustomizePizza} />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}
