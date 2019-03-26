import React from 'react';
import HistoryTable from '../component/HistoryTable';
import ResponsePageFactory from '../factory/ResponsePageFactory';

export default class SearchHistory extends React.Component {
    state = {
        page: { number: 1, items: null },
    };

    componentDidMount() {
        const pageNumber = parseInt(this.props.match.params.page) || this.state.page.number;
        this.props.history.push(`/history/${pageNumber}`);
        this.fetchPage(pageNumber);
    };

    fetchPage(pageNumber) {
        this.props.backendApiClient.getPage(pageNumber)
        .then(result => result.json())
        .then(page => this.setState({
            page: ResponsePageFactory(
                page,
                pageNumber,
            ),
        }));
    }

    handleChangePage = (event, page) => {
        this.props.history.push(`/history/${page + 1}`);
        this.fetchPage(page + 1);
    };

    render() {
        if (this.state.page.items === null) {
            return (<div key={0}>Loading</div>);
        }

        return (
            <HistoryTable key={this.props.match.params.page}
                          page={this.state.page}
                          handleChangePage={this.handleChangePage}
            />
        );
    }

}
