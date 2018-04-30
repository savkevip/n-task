import React, { Component } from 'react';
import './TableContainer.css';
import { connect } from 'react-redux';
import { getData } from '../../state/actions';
import { mapTableLoadingState, mapTableState } from '../../state/selector';
import TableRowComponent from '../../components/TableRowComponent/TableRowComponent';

class TableContainer extends Component {
    componentDidMount() {
        this.props.dispatchGetData();
    }

    render() {
        const { users, loading } = this.props;

        return (
            <div className="table-container-wrapper">
                <h2 className="table-heading">Users:</h2>
                {loading ? <div className="table-container-loader" /> :
                    <ul className="table-container-wrapper-list">
                        { users && users.map(user => <TableRowComponent user={user} key={user.id} />) }
                    </ul>
                }
            </div>
        );
    }

}

const mapStateToProps = state => ({
    users: mapTableState(state),
    loading: mapTableLoadingState(state)
});

const dispatchToProps = {
    dispatchGetData: getData
};

export default connect(mapStateToProps, dispatchToProps)(TableContainer);