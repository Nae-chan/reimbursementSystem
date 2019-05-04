import { environment } from "../enviroment";
import { User } from "../models/user";

// Holds action types for modifying User paths
export const userTypes = {
  EDIT_USER: 'EDIT_USER',
  VIEW_ONLY: 'VIEW_ONLY',
  BLANK_USER: 'BLANK_USER',
  GET_ALL_USERS: 'GET_ALL_USERS',
  GET_USER_BY_ID: 'ET_USER_BY_ID',
  TEST: 'TEST'
}
//View, edit, or new User
export const modifyUser = (
  editable: boolean,
  selectedUser: User,
  history: any) => async (dispatch) => {
    try {
      if (editable && selectedUser === undefined) {
        dispatch({
          type: userTypes.BLANK_USER
        })
        history.push('/users/new');
      } else if (!editable && selectedUser !== undefined) {
        dispatch({
          payload: {
            selectedUser
          },
          type: userTypes.VIEW_ONLY
        })
        history.push('/users/:id');
      } else if (editable && selectedUser !== undefined) {
        dispatch({
          payload: {
            selectedUser
          },
          type: userTypes.EDIT_USER
        })
      } else {
        //toast
      }
    } catch (err) {
      console.log(err);
    }
  }

// Get all current Users
export const getUsers = () => async (dispatch) => {
  try {
    const resp = await fetch(environment.context + '/users', { credentials: 'include' });
    const body = await resp.json();
    dispatch({
      payload: {
        listUsers: body
      },
      type: userTypes.GET_ALL_USERS
    })
  } catch (err) {
    console.log(err);
  }
}

// Get User by ID
export const getUserById = (id: number) => async (dispatch) => {
  try {
    const resp = await fetch(environment.context + '/users/' + id, { credentials: 'include' });
    const body = await resp.json();
    dispatch({
      payload: {
        user: body
      }, type: userTypes.GET_USER_BY_ID
    })
  } catch (err) {
    console.log(err);
  }
}