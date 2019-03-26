import React from 'react';
import JSXBuilder from '../builder/JSXBuilder';

export default WrappedComponent => {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    jsxBuilder={new JSXBuilder()}
                />
            );
        }
    };
}
