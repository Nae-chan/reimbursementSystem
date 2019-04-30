import React from "react";
import { Link } from "react-router-dom";

export class NavComponent extends React.PureComponent<any> {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    <Link to="/home" className="unset-anchor">
                        Add logo
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav" >
                        <li className="nav-item active">
                            <Link to="/home" className="unset-anchor nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/users" className="unset-anchor nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}