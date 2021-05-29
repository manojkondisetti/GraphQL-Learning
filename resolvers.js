// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        iTunesSearch: (_, { term }, { dataSources }) =>
            dataSources.iTunesSearchAPI.getITunesSearchResult({ term })
    }
};

// Export the resolvers
module.exports = resolvers;