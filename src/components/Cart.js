import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';
import { removeFromCart } from '../redux/actions';
import CartItems from './CartItems';

const Cart = props => {
    const {
        cart: { cartItems, total },
        onToggleCart,
        removeFromCart
    } = props;
    const onRemoveCartItemClick = (ev, data) => {
        const { id } = data;
        removeFromCart({ id });
    };

    return (
        <div className='cart-content' style={{margin: '1em'}}>
            <Icon
                name='close'
                onClick={onToggleCart}
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
                <CartItems
                    cartItems={cartItems}
                    onRemoveCartItemClick={onRemoveCartItemClick}
                    total={total}
                /> :
                null
            }
            <h2 style={{textAlign: 'right'}}>Total ${total.toFixed(2)}</h2>
        </div>
    );
}

const mapStateToProps = ({ cart }) => {
    return { cart };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
