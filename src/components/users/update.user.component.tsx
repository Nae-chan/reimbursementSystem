import React from 'react';
import { EditCardComponent } from './edit.card.user.component';
import { IModifyUserState, IState } from '../../reducers';
import { connect } from 'react-redux';
/**
 * This components updates the state of the Selected User for viewing
 * updating, or creating a new user
 *  */

//Take in User state
interface IModifyUserProps {
    selectedUser: IModifyUserState
}

export class UpdateUserComponent extends React.Component<IModifyUserProps>{

    user = this.props.selectedUser.listUsers && this.props.selectedUser.listUsers
    render() {
        return (
            //ASK ABOUT ALSO BRINGING IN TITLE!!
            <div className="container">
                <EditCardComponent
                 selectedUser = {this.props.selectedUser} />
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        selectedUser: state.selectedUser,
        
    }
  }
  
//   const mapDispatchToProps = {
//     buyJoke: buyJoke
//   }
  
  export default connect(mapStateToProps)(UpdateUserComponent);