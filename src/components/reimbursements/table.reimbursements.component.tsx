import React from "react";
import { connect } from "react-redux";
import { IState} from "../../reducers";
import { RouteComponentProps, withRouter } from "react-router";
import { Reimbursement } from "../../models/reimbursement";

/**
 * This container components holds the table for all reimbursements
 * */
//take in props
interface IReimbursementProps extends RouteComponentProps<{}>{
    reimb: any;
}
export class ReimbTableComponent extends React.PureComponent<IReimbursementProps>{
    
    clicked = () => {
        console.log("fix this plz")
        //this.props.clickUser && this.props.clickUser(false, this.props.listUsers, this.props.history)
    }
    
    render() {
        const reimb = this.props.reimb && this.props.reimb;
        if(reimb){
        return (
            < >
                <tr onClick={() => this.clicked}>
                    <td className="table-center">{reimb.reimbursement_id}</td>
                    <td className="table-center">${reimb.amount}</td>
                    <td className="table-center">{reimb.date_submitted.slice(0,10)}</td>
                    <td className="table-center">{reimb.status}</td>
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
      reimbursement: state.reimburse,
    }
  }
  // const mapDispatchToProps = {
  //   clickUser: modifyUser
  // }
  
  export default withRouter(connect(mapStateToProps)(ReimbTableComponent));