import { environment } from "../enviroment";
import { Reimbursement } from "../models/reimbursement";


// Holds action types for modifying Reimbursement paths
export const reimbursementTypes = {
  EDIT_REIMB: 'EDIT_REIMB',
  VIEW_ONLY: 'VIEW_ONLY',
  BLANK_REIMB: 'BLANK_REIMB',
  GET_ALL_REIMB: 'GET_ALL_REIMB',
  GET_REIMB_BY_ID: 'GET_REIMB_BY_ID',
  GET_REIMB_BY_STATUS: 'GET_REIMB_BY_STATUS'
}
//View, edit, or new reimburement
export const modifyReimb = (
  editable: boolean,
  reimbursement: Reimbursement,
  history: any) => async (dispatch) => {
    try {
      if (editable && reimbursement !== undefined) {
        dispatch({
          payload:{
            reimbursement
          },
          type: reimbursementTypes.EDIT_REIMB
        })
        history.push('/reimbursement/:id');
      } else if (!editable && reimbursement !== undefined) {
        dispatch({
          payload: {
            reimbursement
          },
          type: reimbursementTypes.VIEW_ONLY
        })
        history.push('/reimbursement/:id');
      } else if (editable && reimbursement === undefined) {
        dispatch({
          type: reimbursementTypes.BLANK_REIMB
        })
      } else {
        //toast
      }
    } catch (err) {
      console.log(err);
    }
  }

// Get all reimbursements
export const getReimbursements = () => async (dispatch) => {
  try {
    const resp = await fetch(environment.context + '/reimbursements', { credentials: 'include' });
    const body = await resp.json();
    dispatch({
      payload: {
        reimbursement: body
      },
      type: reimbursementTypes.GET_ALL_REIMB
    })
  } catch (err) {
    console.log(err);
  }
}

// Get reimbursement by ID
export const getReimbById = (id: number) => async (dispatch) => {
  try {
    const resp = await fetch(environment.context + '/reimbursements/author/userId/' + id, { credentials: 'include' });
    const body = await resp.json();
    dispatch({
      payload: {
        reimbursement: body
      }, type: reimbursementTypes.GET_REIMB_BY_ID
    })
  } catch (err) {
    console.log(err);
  }
}
// Get reimbursement by Status
export const getReimbByStatus = (status: number) => async (dispatch) => {
  try {
    const resp = await fetch(environment.context + '/status/' + status, { credentials: 'include' });
    const body = await resp.json();
    dispatch({
      payload: {
        reimbursement: body
      }, type: reimbursementTypes.GET_REIMB_BY_STATUS
    })
  } catch (err) {
    console.log(err);
  }
}