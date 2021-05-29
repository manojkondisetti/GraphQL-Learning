// To make the GraphQL wrapper of the REST API, we need to work with the RESTDataSource class
const {RESTDataSource} = require('apollo-datasource-rest')

class ITunesSearchAPI extends RESTDataSource {
    constructor() {
        super()
        //this is the base url for our API calls
        this.baseURL = 'https://itunes.apple.com/search'
    }

    //this is our main fetch call for our iTunes query
    async getITunesSearchResult({term}) {
        //use template literals so you can change the search term with each query -
        const response = await this.get(`?term=${term}`)
        console.log("Raw repsonse: " + response)
        return this.iTunesSearchResultReducer(JSON.parse(response), term)
    }

    // our async call will pass data to this reducer, which will return the data
    //mapped to our GraphQL schema
    iTunesSearchResultReducer(response, term) {
        console.log("Result count: " + response.resultCount)
        return response.results.map(res => ({
            id: res.trackId || res.artistId,
            kind: res.kind,
            trackId: res.trackId,
            trackName: res.trackName,
            artistId: res.artistId,
            artistName: res.artistName
        }));
    }
}

module.exports = ITunesSearchAPI;