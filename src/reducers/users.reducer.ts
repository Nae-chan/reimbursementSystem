import { IModifyUserState } from ".";
import { userTypes } from "../actions/user.action";


const initialState: IModifyUserState = {
    editable: false,
    user: undefined,
    listUsers: undefined,
    title: 'Users'
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.BLANK_USER:
            return {
                ...state,
                editable: true,
                title: 'New User'
            }
        case userTypes.VIEW_ONLY:
            return {
                ...state,
                selectedUser: action.payload.selectedUser,
                title: 'User Information'
            }
        case userTypes.EDIT_USER:
            return {
                ...state,
                editable: true,
                selectedUser: action.payload.selectedUser,
                title: 'Update User'
            }
        case userTypes.GET_ALL_USERS:
            return {
                ...state,
                listUsers: action.payload.listUsers
            }
        case userTypes.GET_USER_BY_ID:
            return {
                ...state,
                listUsers: action.payload.listUsers
            }
        default:
            break
    }
    return state;
}