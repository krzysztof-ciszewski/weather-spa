import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Homepage from './page/Homepage';
import SearchHistory from './page/SearchHistory';
import NavTabs from './component/TopNav';
import WithOpenWeatherApiClient from './hoc/WithOpenWeatherApiClient';
import WithJSXBuilder from './hoc/WithJSXBuilder';
import openWeatherApiClientFactory from './factory/OpenWeatherApiClientFactory';
import backendApiClientFactory from './factory/BackendApiClientFactory';
import requestBodyFactory from './factory/RequestBodyFactory';
import config from '../config/env';
import WithBackendApiClient from './hoc/WithBackendApiClient';

const openWeatherApiClient = openWeatherApiClientFactory(
    config.openWeatherMap.apiKey,
    config.openWeatherMap.apiUrl,
);

const backendApiClient = backendApiClientFactory(
    config.backend.apiUrl,
    requestBodyFactory,
);

export default () => (
    <BrowserRouter>
        <NavTabs/>
        <div>
            <Route path='/' exact component={
                WithJSXBuilder(
                    WithBackendApiClient(backendApiClient)(
                        WithOpenWeatherApiClient(openWeatherApiClient)(
                            Homepage)),
                )
            }/>
            <Route path='/history/:page' component={
                withRouter(WithBackendApiClient(backendApiClient)(SearchHistory))
            }/>
        </div>
    </BrowserRouter>
);
