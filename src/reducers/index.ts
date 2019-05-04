import { combineReducers } from "redux";
import { authReducer } from "./authentication.reducer";
import { User } from "../models/user";
import { userReducer } from "./users.reducer";

// This holds the state for user authenticaton
export interface IAuthState {
  currentUser?: User,
  errorMessage?: string
} 
// This holds the state for current user information
export interface IModifyUserState {
  editable: boolean,
  user?: User,
  listUsers?: User[],
  title: string
} 
//this connects states to props
export interface IState {
  auth: IAuthState
  selectedUser: IModifyUserState
}
//this connects reducers and states
export const state = combineReducers<IState>({
  auth: authReducer,
  selectedUser: userReducer
  })