import WithGoogleMapsApiKey from '../hoc/WithGoogleMapsApiKey';
import config from '../../config/env';
import GoogleMapReact from 'google-map-react';

const Map = WithGoogleMapsApiKey(config.googleMaps.apiKey)(GoogleMapReact);

export default Map;
