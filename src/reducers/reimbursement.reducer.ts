import { IReimbursementState } from ".";



const initialState: IReimbursementState = {
    editable: false,
  reimbursements: undefined,
  title: 'Reimbursements'
}

export const reimbursementReducer = (state = initialState, action) => {
 
    return state;
}