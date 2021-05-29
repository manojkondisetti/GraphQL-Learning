// Import apollo server lambda
const { ApolloServer, gql } = require('apollo-server-lambda');

// Import Schema and Resolvers
const typeDefs = require('./schema');
const resolvers = require('./resolvers')

// Instantiating the Apollo server and hook to playground
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: "/dev/graphql"
    }
});

// Handler for our GQL queries. This will be use in the serverless.yml file
// This will make the underlying server support CORS:
exports.graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});