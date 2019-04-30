import { environment } from "../enviroment";

// Holds action type objects
export const authTypes = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  FAILED_TO_LOGIN: 'FAILED_TO_LOGIN',
  LOGGED_IN: 'LOGGED_IN'
}
// Get loggin info from server
export const login = (username: string, password: string, history: any) => async(dispatch) => {
  try {
    const resp = await fetch(environment.context + '/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log(resp);

    if (resp.status === 401) {
      dispatch({
        type: authTypes.INVALID_CREDENTIALS
      })
    } else if (resp.status === 200) {
      // redirect to logged in page
      const user = await resp.json();
      dispatch({
        payload: {
          user
        },
        type: authTypes.LOGGED_IN
      })
      history.push('/loggedIn');
    } else {
      dispatch({
        type: authTypes.FAILED_TO_LOGIN
      })
    }
  } catch (err) {
    console.log(err);
  }
}