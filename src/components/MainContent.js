import React, { Component } from 'react'
import { Sidebar } from 'semantic-ui-react'
import MainHeader from './MainHeader';
import PizzaMenu from './PizzaMenu';
import Cart from './Cart';

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
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visibleCart}
                    width='wide'
                >
                <Cart />
                </Sidebar>
                <Sidebar.Pusher>
                    <PizzaMenu />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
  }
}
