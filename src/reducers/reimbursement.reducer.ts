import { IReimbursementState } from ".";
import { reimbursementTypes } from "../actions/reimbursement.action";



const initialState: IReimbursementState = {
    editable: false,
  reimbursements: undefined,
  title: 'Reimbursements'
}

export const reimbursementReducer = (state = initialState, action) => {
    switch (action.type) {
        case reimbursementTypes.GET_REIMB_BY_STATUS:
            return {
                ...state,
                reimbursements: action.payload.reimbursement
            }
        case reimbursementTypes.GET_REIMB_BY_ID:
            return {
                ...state,
                reimbursements: action.payload.reimbursement
            }
        case reimbursementTypes.EDIT_REIMB:
            return {
                ...state,
                editable: true,
                reimbursements: action.payload.reimbursement,
                title: 'Update Reimbursement'
            }
        case reimbursementTypes.VIEW_ONLY:
            return {
                ...state,
                listUsers: action.payload.listUsers
            }
        case reimbursementTypes.BLANK_REIMB:
            return {
                ...state,
                editable: true,
                title: 'New Reimbursement'
            }
        default:
            break
    }
    return state;
}