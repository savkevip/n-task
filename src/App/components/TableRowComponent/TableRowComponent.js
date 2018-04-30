import React from 'react';
import './TableRowComponent.css';
import { Link } from 'react-router-dom';
import tableDetailRoute from '../../routes/tableRoutes';

const TableRowComponent = ({ user }) => (
    <li className="table-row-item">
        <Link to={tableDetailRoute(user.id)}>{user.login}</Link>
        <div className="table-row-img-wrapper">
            <img className="table-row-img" src={user.avatar_url} alt={user.login} />
        </div>
    </li>
);

export default TableRowComponent;