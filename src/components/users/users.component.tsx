import React from "react";
import  UserTableComponent  from "./table.user.component";
import { IModifyUserState, IState } from "../../reducers";
import { connect } from "react-redux";
import { getUserById, getUsers, modifyUser } from "../../actions/user.action";
import { User } from "../../models/user";
import { RouteComponentProps, withRouter } from "react-router";

/**
 * This components updates the state of a User displayed in the userCardComponent
 *  */

interface IIdState {
  id: number;
}
//Take in User state
interface IUserTableProps extends RouteComponentProps<{}>{
  id: number
  selectedUser: IModifyUserState
  getUsers: () => any
  getUserById: (id: number) => any
  clickUser: (editable: boolean, selectedUser: User, history: any) => any
}

export class UserComponent extends React.Component<IUserTableProps, IIdState> {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  //send action to get all users
  componentDidMount = () => {
    this.props.getUsers();
  };

  setId = (event) => {
    this.setState({
      id: event.target.value
    });
  }

  render() {
    let id = this.state.id;
    if (this.props.selectedUser === undefined) {
      return (
        <div> className="error"
        Error! redirecting to home page...
        </div>
      )
    } else {
      return (
        <div className="container">
          <div>
            <label htmlFor="inputUserId" className="sr-only">UserId</label>
            <input type="number" id="inputUserId" name="userId"
              className="col-xs-2" placeholder="User ID" onChange={(e) => this.setId(e)} />
            <button type="submit" className="btn btn-success" onClick={() => this.props.getUserById(id)} >Search</button>
            <button className="btn btn-success" onClick={() => this.props.clickUser}>New User</button>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="table-center" scope="col">UserId</th>
                <th className="table-center" scope="col">Username</th>
                <th className="table-center" scope="col">First Name</th>
                <th className="table-center" scope="col">Last Name</th>
                <th className="table-center" scope="col">Email</th>
                <th className="table-center" scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {this.props.selectedUser.listUsers && this.props.selectedUser.listUsers.map(currentUser => (
                <UserTableComponent key={'user-' + currentUser.userId} listUsers={currentUser}  />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

}
const mapStateToProps = (state: IState) => {
  return {
    selectedUser: state.selectedUser,

  }
}

const mapDispatchToProps = {
  getUsers: getUsers,
  getUserById: getUserById,
  clickUser: modifyUser
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(UserComponent));