import React from 'react';
import { Segment, Checkbox, List, Message } from 'semantic-ui-react';
import { toppingIsSelected } from '../pureFunctions';

export default function Toppings(props) {
    const {
        toppings,
        maxToppingsReached,
        onCheckBoxChange,
        selectedToppings
    } = props;

    return (
        <Segment vertical>
            <List>
                {toppings.map(({ topping: { name, price }, defaultSelected }) => {
                    const selected = toppingIsSelected(selectedToppings, name);

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
