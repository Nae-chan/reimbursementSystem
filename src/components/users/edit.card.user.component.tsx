import React from "react";
import { IModifyUserState } from "../../reducers";

/* *
 * This container components holds all the fields to edit for a User
 *  */

//Take in User props
interface IEditCardProps {
    selectedUser: IModifyUserState
}
export class EditCardComponent extends React.PureComponent<IEditCardProps> {
    render() {
        const title = this.props.selectedUser.title;
        if (this.props.selectedUser.listUsers && this.props.selectedUser.listUsers[0]){
            const user = this.props.selectedUser.listUsers[0]
        return (
            // EDIT USER
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
                        <button className="btn btn-danger">Cancel</button>
                    </li>
                </ul>
            </div>
        )
    } else if (this.props.selectedUser.editable){
        // NEW User
        return(
            <div className="card col-md-4 col-sm-6 col-xs-12">
                <img src="Users/danae/Documents/Blake/project1/project1/src/assets/userImage.png"
                    className="userImage"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username: <input type="text" name="username" /> </li>
                    <li className="list-group-item">Password: <input type="text" name="password" /></li>
                    <li className="list-group-item">First Name: <input type="text" name="firstName" /></li>
                    <li className="list-group-item">Last Name: <input type="text" name="lastName" /></li>
                    <li className="list-group-item">Email: <input type="text" name="email" /></li>
                    <li className="list-group-item">Role: <select>
                        <option value="3">Employee</option><option value="2">Finance Manager</option>
                        <option value="1">Admin</option></select></li>

                    <li className="list-group-item">
                    <button className="btn btn-warning">Save</button>
                        <button className="btn btn-danger">Cancel</button>
                    </li>
                </ul>
            </div>
        )
    }else {
        // VIEW User
        return(
            <div className="card col-md-4 col-sm-6 col-xs-12">
                <img src="Users/danae/Documents/Blake/project1/project1/src/assets/userImage.png"
                    className="userImage"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">UserId: <input type="text" name="userId" readOnly/></li>
                    <li className="list-group-item">Username: <input type="text" name="username" readOnly/> </li>
                    <li className="list-group-item">Password: <input type="text" name="password" readOnly/></li>
                    <li className="list-group-item">First Name: <input type="text" name="firstName" readOnly/></li>
                    <li className="list-group-item">Last Name: <input type="text" name="lastName" readOnly/></li>
                    <li className="list-group-item">Email: <input type="text" name="email" readOnly/></li>
                    <li className="list-group-item">Role: <select disabled>
                        <option value="3">Employee</option><option value="2">Finance Manager</option>
                        <option value="1">Admin</option></select> </li>

                    <li className="list-group-item">
                    <button className="btn btn-warning">Save</button>
                        <button className="btn btn-danger">Cancel</button>
                    </li>
                </ul>
            </div>
        )
    }}
}