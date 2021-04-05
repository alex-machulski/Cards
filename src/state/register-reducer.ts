import {Dispatch} from "redux";
import {ActionsType} from "./store";
import {authAPI} from "../api/api";

const SET_REGISTER_SUCCESS = "register/SET_REGISTER_SUCCESS";
const CLEAR_REGISTER_STATUS = "register/CLEAR_REGISTER_STATUS";
const SET_REGISTER_ERROR = "register/SET_REGISTER_ERROR";

const initialState = {
    isRegistrationSuccess: false,
    registerError: null as null | string
}

type InitialStateType = typeof initialState

export const registerReducer = (state: InitialStateType = initialState, action: RegisterReducerActionsType): InitialStateType => {

    switch (action.type) {
        case SET_REGISTER_SUCCESS:
            return {...state, isRegistrationSuccess: true}
        case CLEAR_REGISTER_STATUS:
            return {...state, isRegistrationSuccess: false}
        case SET_REGISTER_ERROR:
            return {...state, registerError: action.error}
        default:
            return state
    }
}


export const registerTC = (email: string, password: string) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.register(email, password)
        .then(res => {
            if (!res.data.error) {
                dispatch(registrationAC());
            }
        })
        .catch(err => {
            dispatch(setRegisterErrorAC(err.response.data.error));
        })
}

export const registrationAC = () => ({type: SET_REGISTER_SUCCESS} as const);
export const clearRegisterStatusAC = () => ({type: CLEAR_REGISTER_STATUS} as const);
export const setRegisterErrorAC = (error: string | null) => ({type: SET_REGISTER_ERROR, error} as const);

type RegistrationActionType = ReturnType<typeof registrationAC>;
type ClearRegisterStatusActionType = ReturnType<typeof clearRegisterStatusAC>;
type SetRegisterErrorActionType = ReturnType<typeof setRegisterErrorAC>;

export type RegisterReducerActionsType =
    RegistrationActionType |
    ClearRegisterStatusActionType |
    SetRegisterErrorActionType