import React, { Fragment } from 'react';
import { Icon, List, Divider } from 'semantic-ui-react';
import { firstLetterCapitalized } from '../pureFunctions';

export default function CartItems({ cartItems, total, onRemoveCartItemClick }) {
    return (
        <Fragment>
            {cartItems.map(({ name, total, selectedToppings, id }) => (
                <List inverted key={id}>
                    <List.Item>
                        <Icon
                            name='close'
                            onClick={onRemoveCartItemClick}
                            size='small'
                            id={id}
                            style={{ cursor: 'pointer', padding: '15px', float: 'right' }}
                        />
                        <h3>{firstLetterCapitalized(name)} pizza</h3>
                        <h5 style={{textDecoration: 'underline'}}>Toppings</h5>
                        <List>
                            {selectedToppings.map(({ name }) => (
                                <List.Item key={name}>{name}</List.Item>
                            ))}
                        </List>
                        <h5 style={{textAlign: 'right'}}>Total ${total.toFixed(2)}</h5>
                    </List.Item>
                    <Divider inverted />
                </List>
            ))}
        </Fragment>
    );
}
