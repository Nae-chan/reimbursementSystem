import React from "react";
import { Reimbursement } from "../../models/reimbursement";
import { RouteComponentProps } from "react-router";
import { IReimbursementState, IState } from "../../reducers";
import { UserComponent } from "../users/users.component";
import { connect } from "react-redux";
import { ReimbTableComponent } from "./table.reimbursements.component";
import { modifyReimb, getReimbById, getReimbByStatus, getReimbursements } from "../../actions/reimbursement.action";

/**
 * This components shows all reimbursements and by status
 *  */

interface IReimbState {
    status: number;
    id: number;
  }
  //Take in Reimb state
  interface IReimbursementProps extends RouteComponentProps<{}>{
    reimb: IReimbursementState
    getReimbursements: () => any
    getReimbById: (id: number) => any
    getReimbByStatus: (status: number) => any
    clickReimbursement: (editable: boolean, reimb: Reimbursement, history: any) => any
  }
  
  export class ReimbursementComponent extends React.Component<IReimbursementProps, IReimbState> {
    constructor(props) {
      super(props);
      this.state = {
        id: 0,
        status: 0
      };
    }
  
    //send action to get all reimbursements
    componentDidMount = () => {
      this.props.getReimbursements();
    };
    // set status
    setStatus = (event) => {
      this.setStatus({
        status: event.target.value
      });
    }
    // set user id
    setId = (event) => {
        this.setStatus({
          id: event.target.value
        });
      }
  
    render() {
        let id = this.state.id;
      let status = this.state.status;
      if (this.props.reimb === undefined) {
        return (
          <div> className="error"
          Error! redirecting to home page...
          </div>
        )
      } else {
        return (
          <div className="container">
            <div>
              <label htmlFor="inputUserId" className="sr-only">User ID</label>
              <input type="number" id="inputUserId" name="userId"
                className="col-xs-2" placeholder="User ID" onChange={(e) => this.setId(e)} />
              <button type="submit" className="btn btn-success" onClick={() => this.props.getReimbById(id)} >Search</button>
              <button className="btn btn-success" onClick={() => this.props.clickReimbursement}>New Reimbursement</button>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="table" scope="col">Reimbursement Id</th>
                  <th className="table" scope="col">Amount</th>
                  <th className="table" scope="col">Date</th>
                  <th className="table" scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                  <ReimbTableComponent reimb={this.props.reimb} history={this.props.history}
                  location={this.props.location} match={this.props.match}/>
              </tbody>
            </table>
          </div>
        );
      }
    }
  
  }
  const mapStateToProps = (state: IState) => {
    return {
      reimb: state.reimburse,
  
    }
  }
  
  const mapDispatchToProps = {
    getReimbById: getReimbById,
    getReimbByStatus: getReimbByStatus,
    getReimbursements: getReimbursements,
    clickReimbursement: modifyReimb
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementComponent);