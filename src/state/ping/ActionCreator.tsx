import { AsyncAction } from '../Store'

export function logout(): AsyncAction {
  return async (dispatch) => {
    dispatch({
      type: 'auth/LOGOUT_SUCCESS',
    })
  }
}
