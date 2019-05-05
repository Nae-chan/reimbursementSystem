import React from "react";
import { User } from "../../models/user";
import { connect } from "react-redux";
import { IState } from "../../reducers";
import { modifyUser } from "../../actions/user.action";
import { RouteComponentProps } from "react-router";

/**
 * This container components holds the table for all users
 * */
//Take in User props

// THIS NEEDS TO EXTEND RouteComponentProps<{}> for history to work
interface IUserCardProps  {
    listUsers: User;
    clickUser?: (editable: boolean, selectedUser: User, history: any) => any,
}
export class UserTableComponent extends React.PureComponent<IUserCardProps>{
    
    clicked = () => {
        console.log("fix this plz")
        //this.props.clickUser && this.props.clickUser(false, this.props.listUsers, this.props.history)
    }
    
    render() {

        const user = this.props.listUsers;
        return (
            < >
                <tr onClick={() => this.clicked}>
                    <td className="table">{user.userId}</td>
                    <td className="table">{user.username}</td>
                    <td className="table">{user.firstName}</td>
                    <td className="table">{user.lastName}</td>
                    <td className="table">{user.email}</td>
                    <td className="table">{user.role.role}</td>
                </tr>

            </>
        )
    }
}
  const mapStateToProps = (state: IState) => {
    return {
      selectedUser: state.selectedUser,
    }
  }
  const mapDispatchToProps = {
    clickUser: modifyUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserTableComponent);