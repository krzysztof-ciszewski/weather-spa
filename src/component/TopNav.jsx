/* https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/tabs/NavTabs.js */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class NavTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        //TODO: add translations
        return (
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs variant="fullWidth" value={this.state.value} onChange={this.handleChange}>
                            <Tab component={Link}
                                 to='/'
                                 label='Homepage'/>
                            <Tab component={Link}
                                 to='/history/1'
                                 label='Search History'/>
                        </Tabs>
                    </AppBar>
                </div>
            </NoSsr>
        );
    }
}

NavTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
