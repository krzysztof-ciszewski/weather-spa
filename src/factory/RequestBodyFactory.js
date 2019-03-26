export default ({ coord, weather, main, wind, clouds, name }, requestTime) => {
    return {
        temperature: main.temp,
        cloudiness: clouds.all,
        windSpeed: wind.speed,
        description: weather[0].description,
        city: {
            name,
            lat: coord.lat,
            lon: coord.lon,
        },
        requestTime,
    };
}
