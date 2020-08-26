import { applyMiddleware, combineReducers, createStore, Store, Reducer } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { PingAction } from '../state/ping/Action'
import { PingState, pingReducer } from '../state/ping/Reducer'

export type Action = PingAction

export type State = {
  ping: PingState
}

export type AsyncReturnAction = ThunkAction<Promise<any>, State, {}, Action>
export type AsyncAction = ThunkAction<Promise<void>, State, {}, Action>
export type Dispatch = ThunkDispatch<State, {}, Action>
export type ReduxStore = Store<State, Action> & { dispatch: Dispatch }

const appReducer = combineReducers({
  ping: pingReducer,
})

// @ts-ignore
const rootReducer: Reducer<State, Action> = (state: State, action: Action) => {
  if (action.type === 'auth/LOGOUT_SUCCESS') {
    // @ts-ignore make state undefined to force reducer return default state
    state = undefined
  }
  // @ts-ignore by include _persist in AuthState & LanguageState it will slow app starting time
  return appReducer(state, action)
}

const middlewares = __DEV__ ? [thunk, logger] : [thunk]

export const store: Store<State, Action> = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
