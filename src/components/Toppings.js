import React, { Component } from 'react';
import { Segment, Checkbox, List, Message } from 'semantic-ui-react';

export default function Toppings(props) {
    const {
        toppings,
        maxToppingsReached,
        onCheckBoxChange,
        selectedToppings
    } = props;

    const toppingIsSelected = (toppingName) => {
        return selectedToppings.some(({ name }) => name === toppingName);
    }

    return (
        <Segment vertical>
        {/* double loop, could this be done better???? */}
            <List>
                {toppings.map(({ topping: { name, price }, defaultSelected }) => {
                    const selected = toppingIsSelected(name);

                    return (
                        <List.Item key={name}>
                            <Checkbox
                                defaultChecked={selected}
                                disabled={!selected && maxToppingsReached}
                                label={name}
                                onClick={onCheckBoxChange}
                                price={price}
                            />
                        </List.Item>
                    );
                })}
            </List>
            {maxToppingsReached ?
                <Message>You have reached the max amount of toppings.</Message> :
                null
            }
        </Segment>
    );
}
