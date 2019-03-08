import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class PizzaMenu extends Component {
    render() {
        return (
            <div className='pizza-menu-content'>
                <Header as='h2' textAlign='center'>
                    Choose a Pizza
                </Header>
                <hr />
                <Segment vertical>
                    Small Pizza
                </Segment>
                <Segment vertical>
                    Medium Pizza
                </Segment>
                <Segment vertical>
                    Large Pizza
                </Segment>
            </div>
        );
    }
}

export default PizzaMenu;



