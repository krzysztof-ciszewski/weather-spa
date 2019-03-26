class OpenWeatherApiClient {
    constructor(apiKey, apiUrl, weatherApiUri = 'weather', units = 'metric') {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
        this.weatherApiUri = weatherApiUri;
        this.units = units;
        this.lastFetchExecutionTime = 0;
    }

    async fetchCurrentWeatherByLatLng(lat, lon) {
        const searchParams = this.buildQueryParameters({ lat, lon });
        const start = (new Date()).getTime();
        const response = await fetch(`${this.apiUrl}/${this.weatherApiUri}?${searchParams.toString()}`);
        const end = (new Date()).getTime();
        this.lastFetchExecutionTime = end - start;

        return response.json();
    }

    buildQueryParameters(params) {
        const queryParams = new URLSearchParams({
            appid: this.apiKey,
            units: this.units,
            ...params,
        });

        return queryParams.toString();
    }

    getLastFetchExecutionTime() {
        if (performance === undefined) {
            return this.lastFetchExecutionTime;
        }

        const lastFetch = performance
            .getEntries({ initiatorType: fetch })
            .pop();

        return lastFetch.responseEnd - lastFetch.fetchStart;
    }
}

export default OpenWeatherApiClient;
