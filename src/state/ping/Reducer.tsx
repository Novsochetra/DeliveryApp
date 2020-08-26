import { Action } from '../Store'

export type PingState = {
  authorization: string | null
}

const initialState = {
  authorization: null,
}

export function pingReducer(state: PingState = initialState, action: Action): PingState {
  switch (action.type) {
    case 'auth/LOGOUT_SUCCESS':
      return initialState
    default:
      return state
  }
}
