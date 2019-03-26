class BackendApiClient {
    constructor(apiUrl, requestBodyFactory) {
        this.apiUrl = apiUrl;
        this.requestBodyFactory = requestBodyFactory;
        this.searchHistory = 'searches';
    }

    async saveSearch(search, requestTime) {
        return fetch(
            `${this.apiUrl}/${this.searchHistory}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    this.requestBodyFactory(search, requestTime),
                ),
            },
        );
    }
    
    async getPage(page) {
        return fetch(`${this.apiUrl}/${this.searchHistory}/${page}`);
    }
}

export default BackendApiClient;
