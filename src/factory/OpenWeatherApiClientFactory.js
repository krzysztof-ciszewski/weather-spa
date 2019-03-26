import OpenWeatherApiClient from '../api/OpenWeatherApiClient';

export default (apiKey, apiUrl) => {
    return new OpenWeatherApiClient(apiKey, apiUrl);
}
