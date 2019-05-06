import React from "react";
import { User } from "../../models/user";
import { connect } from "react-redux";
import { IState } from "../../reducers";
import { modifyUser } from "../../actions/user.action";
import { RouteComponentProps, withRouter } from "react-router";


/**
 * This container components holds the table for all users
 * */
//Take in User props


// THIS NEEDS TO EXTEND RouteComponentProps<{}> for history to work
interface IUserCardProps extends RouteComponentProps<{}> {
    listUsers: User;
    clickUser?: (editable: boolean, selectedUser: User, history: any) => any,
}
export class UserTableComponent extends React.Component<IUserCardProps>{
    
    clicked = () => {
        console.log("fix this plz")
        //this.props.clickUser && this.props.clickUser(false, this.props.listUsers, this.props.history)
    }
    
    render() {

        const user = this.props.listUsers;
        return (
            < >
                <tr onClick={() => this.clicked}>
                    <td className="table-center">{user.userId}</td>
                    <td className="table-center">{user.username}</td>
                    <td className="table-center">{user.firstName}</td>
                    <td className="table-center">{user.lastName}</td>
                    <td className="table-center">{user.email}</td>
                    <td className="table-center">{user.role.role}</td>
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
  
  export default withRouter (connect(mapStateToProps, mapDispatchToProps)(UserTableComponent));