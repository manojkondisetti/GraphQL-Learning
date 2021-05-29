// Import apollo server lambda
const {gql} = require('apollo-server-lambda')

// Construct a schema, using GraphQL schema language
// Template literal: https://stackoverflow.com/questions/50180381/what-is-this-new-syntax-gqlstring
// iTunes REST API : https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
const typeDefs = gql`
  type ITunesSearchResult {
    id: String!
    kind: String
    trackId: String
    trackName: String
    artistId: String
    artistName: String
  }
  
  type Query {
    iTunesSearch(term: String!): [ITunesSearchResult]
  }
`;

// Export the schema (typeDefs)
module.exports = typeDefs;