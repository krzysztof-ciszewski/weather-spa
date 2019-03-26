import React from 'react';

export default apiKey => WrappedComponent => {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    bootstrapURLKeys={{ key: apiKey }}
                />
            );
        }
    };
}
