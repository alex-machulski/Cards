import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {profileReducer} from "./profile-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;