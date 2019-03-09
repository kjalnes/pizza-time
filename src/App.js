import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import 'semantic-ui/dist/semantic.min.css';
import './App.css';

const client = new ApolloClient({
  uri: 'https://core-graphql.dev.waldo.photos/pizza'
});


class App extends Component {

    // in componentDidMount look for a cart in localstorage
    // if cart is found add it to redux
    // add middleware that persits redux store changes to localstorage

    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Fragment>
                        <MainContent />
                    </Fragment>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default App;
