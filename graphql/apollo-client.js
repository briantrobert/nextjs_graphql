import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const httpLink = new HttpLink({
        uri: 'http://localhost:3000/api/graphql',
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

const apolloClient = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        connectToDevTools: true,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore'
          },
          query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all'
          },
          mutate: {
            errorPolicy: 'all'
          }
        }
      })

export default apolloClient;