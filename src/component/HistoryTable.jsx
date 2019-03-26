import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class HistoryTable extends React.Component {
    componentDidUpdate(prevProps) {
        this.props.page.number
    }

    render() {
        const { classes, page } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell align="right">Temperature (C)</TableCell>
                            <TableCell align="right">Cloudiness (%)</TableCell>
                            <TableCell align="right">Wind speed
                                (m/s)</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Request Time
                                (ms)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {page.items.map(item => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    {item.city.name}
                                </TableCell>
                                <TableCell
                                    align="right">{item.temperature}</TableCell>
                                <TableCell
                                    align="right">{item.cloudiness}</TableCell>
                                <TableCell
                                    align="right">{item.windSpeed}</TableCell>
                                <TableCell
                                    align="right">{item.description}</TableCell>
                                <TableCell
                                    align="right">{item.requestTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[10]}
                                colSpan={3}
                                count={page.total}
                                rowsPerPage={page.pageSize}
                                page={page.number-1}
                                onChangePage={this.props.handleChangePage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        );
    }
}

HistoryTable.propTypes = {
    classes: PropTypes.object.isRequired,
    page: PropTypes.shape({
        items: PropTypes.array.isRequired,
        total: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
    }),
};

export default withStyles(styles)(HistoryTable);
