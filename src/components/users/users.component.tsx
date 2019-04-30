import React from "react";
import { Users } from "../../models/user";

interface IUserProps {
    user: Users;
  }
  
  export class UserCardComponent extends React.PureComponent<IUserProps> {
    render() {
      const user = this.props.user;
      return (
        <div className="card col-md-4 col-sm-6 col-xs-12">
          <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg"
            className="card-img-top"
            alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">UserId: {user.userId }</li>
            <li className="list-group-item">username: {user.username}</li>
            <li className="list-group-item">password: {user.password}</li>
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">role: {user.role}</li>
            <li className="list-group-item">
              <button className="btn btn-danger">Delete</button>
            </li>
          </ul>
        </div>
      )
    }
  }