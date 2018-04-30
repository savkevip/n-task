import React, { Component } from 'react';
import './TableDetailComponent.css';
import { connect } from 'react-redux';
import { loadUser } from '../../state/actions';
import { mapTableDetailState } from '../../state/selector';
import Link from "react-router-dom/es/Link";

class TableDetailComponent extends Component {

    componentDidMount() {
        const { match } = this.props;
        this.props.dispatchLoadUser(match.params.id);
    }

    render() {
        const { selectedUser } = this.props;

        return (
            <div className="table-detail-card">
                <img className="table-detail-user-img" src={selectedUser.avatar_url} alt=""/>
                <h2 className="table-heading">{selectedUser.login}</h2>
                <h2 className="table-heading">Role: {selectedUser.site_admin ? 'Admin' : 'User'}</h2>
                <h2 className="table-heading"><a className="table-detail-link" href={selectedUser.html_url} target="_blank">GitHub URL</a></h2>
                <Link className="table-detail-button" to={'/'}>Go Back</Link>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    selectedUser: mapTableDetailState(state)
});

const dispatchToProps = {
    dispatchLoadUser: loadUser
};

export default connect(mapStateToProps, dispatchToProps)(TableDetailComponent);