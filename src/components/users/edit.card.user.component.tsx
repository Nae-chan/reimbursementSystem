import React from "react";
import { User } from "../../models/user";

/* *
 * This container components holds all the fields to edit for a User
 *  */

//Take in User props
interface IEditCardProps {
    pageTitle?: string,
    selectedUser: User;
}
export class EditCardComponent extends React.PureComponent<IEditCardProps> {
    render() {
        const user = this.props.selectedUser;
        const title = this.props.pageTitle;
        return (
            <div className="card col-md-4 col-sm-6 col-xs-12">
                <img src="Users/danae/Documents/Blake/project1/project1/src/assets/userImage.png"
                    className="userImage"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">UserId: <input type="text" name="userId" readOnly/> {user.userId} </li>
                    <li className="list-group-item">Username: <input type="text" name="username" /> {user.username}</li>
                    <li className="list-group-item">Password: <input type="text" name="password" />{user.password}</li>
                    <li className="list-group-item">First Name: <input type="text" name="firstName" />{user.firstName}</li>
                    <li className="list-group-item">Last Name: <input type="text" name="lastName" />{user.lastName}</li>
                    <li className="list-group-item">Email: <input type="text" name="email" />{user.email}</li>
                    <li className="list-group-item">Role: <select>
                        <option value="3">Employee</option><option value="2">Finance Manager</option>
                        <option value="1">Admin</option></select>{user.role.role}</li>

                    <li className="list-group-item">
                    <button className="btn btn-warning">Save</button>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                </ul>
            </div>
        )
    }
}