import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import MainContent from './components/MainContent';
import 'semantic-ui/dist/semantic.min.css';
import './App.css';

const client = new ApolloClient({
  uri: 'https://core-graphql.dev.waldo.photos/pizza'
});


class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <MainContent />
            </ApolloProvider>
        );
    }
}

export default App;
