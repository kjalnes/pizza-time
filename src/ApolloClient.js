import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://core-graphql.dev.waldo.photos/pizza'
});


export default client;
