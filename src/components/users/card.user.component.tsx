import React from "react";
import { User } from "../../models/user";

/**
 * This container components holds all the fields for a User
 *  */

//Take in User props
interface IUserCardProps {
    user: User;
}
export class UserCardComponent extends React.PureComponent<IUserCardProps> {
    render() {
        const user = this.props.user;
        return (
            <div className="card col-md-4 col-sm-6 col-xs-12">
                <img src="Users/danae/Documents/Blake/project1/project1/src/assets/userImage.png"
                    className="userImage"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{user.firstName + user.lastName}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">UserId: {user.userId}</li>
                    <li className="list-group-item">Username: {user.username}</li>
                    <li className="list-group-item">Password: {user.password}</li>
                    <li className="list-group-item">First Name: {user.firstName}</li>
                    <li className="list-group-item">Last Name: {user.lastName}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                    <li className="list-group-item">Role: {user.role.role}</li>
                    <li className="list-group-item">
                    <button className="btn btn-warning">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                </ul>
            </div>
        )
    }
}