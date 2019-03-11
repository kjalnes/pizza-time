import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: '/pizza',
    request: async operation => {
        operation.setContext({
            fetchOptions: {
                credentials: 'include'
            }
        });
    }
});

export default client;
