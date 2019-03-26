import React from 'react';

export default (apiService) => WrappedComponent => {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    openWeatherApiClient={apiService}
                />
            );
        }
    };
}
