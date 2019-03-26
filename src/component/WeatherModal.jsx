import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class WeatherModal extends React.Component {
    state = {
        open: false,
        content: {}
    };

    handleOpen() {
        this.setState({ open: true });
    };

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.setState({ open: this.props.open });
        }

        if (this.props.content !== prevProps.content) {
            this.setState({ content: this.props.content });
        }
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.handleModalClose();
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        {this.state.content}
                    </div>
                </Modal>
            </div>
        );
    }
}

WeatherModal.propTypes = {
    classes: PropTypes.object.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    content: PropTypes.object.isRequired,
};


export default withStyles(styles)(WeatherModal);
