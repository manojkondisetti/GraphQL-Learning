// Import apollo server lambda
const { gql } = require('apollo-server-lambda')

// Construct a schema, using GraphQL schema language
// Template literal: https://stackoverflow.com/questions/50180381/what-is-this-new-syntax-gqlstring
const typeDefs = gql`
type Query {
    hello: String
}
`;

// Export the schema (typeDefs)
module.exports = typeDefs;