import React from 'react';
import Typography from '@material-ui/core/Typography';

class JSXBuilder {
    //TODO: add translations
    build({ main, clouds, wind, weather, name }) {
        return <div>
            <Typography variant="h6" id="modal-title">
                {name}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
                Temperature: {main.temp}&deg;C
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
                Cloudiness level: {clouds.all}%
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
                Wind speed: {wind.speed} m/s
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
                Description: {weather[0].description}
            </Typography>
        </div>;
    }
}

export default JSXBuilder;
