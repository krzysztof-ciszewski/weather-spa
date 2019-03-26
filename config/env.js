const env = {
    googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    openWeatherMap: {
        apiKey: process.env.OPEN_WEATHER_API_KEY,
        apiUrl: process.env.OPEN_WEATHER_API_URL,
    },
    backend: {
        apiUrl: process.env.BACKEND_API_URL,
    },
};

export default env;
