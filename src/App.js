import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import 'semantic-ui/dist/semantic.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import client from './ApolloClient';

class App extends Component {

    // in componentDidMount look for a cart in localstorage
    // if cart is found add it to redux
    // add middleware that persits redux store changes to localstorage

    render() {
        return (
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <BrowserRouter>
                        <MainContent />
                    </BrowserRouter>
                </Provider>
            </ApolloProvider>
        );
    }
}


export default App;
