import React from 'react';
import { User } from '../../models/user';
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
    user: User[]
}

export class UpdateUserComponent extends React.Component<IModifyUserProps>{

    render() {
        return (
            //ASK ABOUT ALSO BRINGING IN TITLE!!
            <div className="container">
                {this.props.user.map((updateUser) => (
                    <EditCardComponent key={'user-' + updateUser.userId} selectedUser={updateUser} />
                )
                )}
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