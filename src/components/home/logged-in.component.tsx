import React from 'react';
import { Link } from 'react-router-dom';

export class LoggedInComponent extends React.Component {
    render() {
        return (
            <div>
            <h1> Welcome </h1>
            <Link to="/users" className="unset-anchor nav-link">Users</Link>
            <Link to="/users" className="unset-anchor nav-link">Users</Link>
            </div>
        );
    }
}