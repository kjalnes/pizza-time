import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainContent from './components/MainContent';
import client from './ApolloClient';
import store from './redux/store';
import 'semantic-ui/dist/semantic.min.css';
import './App.css';

export default function App() {
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
