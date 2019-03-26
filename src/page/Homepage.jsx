import React from 'react';
import WeatherModal from '../component/WeatherModal';
import Map from '../component/Map';
import PropTypes from 'prop-types';
import OpenWeatherApiClient from '../api/OpenWeatherApiClient';
import BackendApiClient from '../api/BackendApiClient';
import JSXBuilder from '../builder/JSXBuilder';
import '../styles/homepage.css';

class Homepage extends React.Component {
    state = {
        modal: {
            open: false,
            content: {},
        },
        loader: '',
    };

    static defaultProps = {
        center: {
            lat: 52.23,
            lng: 21.01,
        },
        zoom: 8,
        loadingClass: 'loader',
    };

    startLoader() {
        this.setState({
            loader: Homepage.defaultProps.loadingClass,
        });
    }

    openWeatherModal = (response) => {
        const content = this.props.jsxBuilder.build(response);
        this.setState({
            modal: { open: true, content },
            loader: '',
        });
    };

    handleClick = async ({ x, y, lat, lng }) => {
        this.startLoader();
        const response = await this.props.openWeatherApiClient.fetchCurrentWeatherByLatLng(
            lat,
            lng,
        );
        const backendResponse = await this.props.backendApiClient.saveSearch(
            response,
            this.props.openWeatherApiClient.getLastFetchExecutionTime(),
        );

        if (!backendResponse.ok) {
            console.error(backendResponse);
        }

        this.openWeatherModal(response);
    };

    handleModalClose = () => {
        this.setState({ modal: { open: false, content: {} } });
    };

    render() {
        return (
            <>
                <div className={this.state.loader}
                     style={{ height: '90vh', width: '100%' }}>
                    <Map
                        defaultCenter={Homepage.defaultProps.center}
                        defaultZoom={Homepage.defaultProps.zoom}
                        onClick={this.handleClick}
                    />
                </div>
                <WeatherModal open={this.state.modal.open}
                              content={this.state.modal.content}
                              handleModalClose={this.handleModalClose}/>
            </>
        );
    }
}

Homepage.propTypes = {
    openWeatherApiClient: PropTypes.instanceOf(OpenWeatherApiClient).isRequired,
    jsxBuilder: PropTypes.instanceOf(JSXBuilder).isRequired,
    backendApiClient: PropTypes.instanceOf(BackendApiClient).isRequired,
};

export default Homepage;

