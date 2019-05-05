import React from "react";
import { connect } from "react-redux";
import { IState, IReimbursementState } from "../../reducers";
import { RouteComponentProps } from "react-router";

/**
 * This container components holds the table for all reimbursements
 * */
//take in props
interface IReimbursementProps extends RouteComponentProps<{}>{
    reimb: IReimbursementState;
}
export class ReimbTableComponent extends React.PureComponent<IReimbursementProps>{
    
    clicked = () => {
        console.log("fix this plz")
        //this.props.clickUser && this.props.clickUser(false, this.props.listUsers, this.props.history)
    }
    
    render() {

        const reimb = this.props.reimb.reimbursements && this.props.reimb.reimbursements;
        if(reimb){
        return (
            < >
                <tr onClick={() => this.clicked}>
                    <td className="table">{reimb.reimbursementId}</td>
                    <td className="table">${reimb.amount}</td>
                    <td className="table">{reimb.dateSubmitted}</td>
                    <td className="table">{reimb.status}</td>
                </tr>
            </>
        )
    } else {
      return (
        <tr>
          <td>No Reimbursements</td>
        </tr>
      )
    }
}
}
  const mapStateToProps = (state: IState) => {
    return {
      reimb: state.reimburse,
    }
  }
  // const mapDispatchToProps = {
  //   clickUser: modifyUser
  // }
  
  export default connect(mapStateToProps)(ReimbTableComponent);