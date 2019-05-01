import { combineReducers } from "redux";
import { authReducer } from "./authentication.reducer";
import { Users } from "../models/user";

// This holds the state for user authenticaton
export interface IAuthState {
  currentUser?: Users,
  errorMessage?: string
} 
export interface IState {
  auth: IAuthState
}
//this handles all the states
export const state = combineReducers<IState>({
  auth: authReducer
  
  })