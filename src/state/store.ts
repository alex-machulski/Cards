import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer, LoginReducerActionsType} from "./login-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import {registerReducer, RegisterReducerActionsType} from "./register-reducer";
import {recoverReducer, RecoverReducerActionsType} from "./recover-reducer";
import {appReducer, AppReducerActionsType} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    profile: profileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type ActionsType =
    LoginReducerActionsType |
    RegisterReducerActionsType |
    RecoverReducerActionsType |
    ProfileReducerActionsType |
    AppReducerActionsType

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>

// @ts-ignore
window.store = store;