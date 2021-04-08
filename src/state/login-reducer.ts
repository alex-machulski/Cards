
import {ThunkType} from "./store";
import {authAPI} from "../api/api";

export const SET_USER_DATA = "SET-USER-DATA"


export type InitialStateLoginType = {
    _id: string | null                  // айдишник пользователя
    email: string | null                //мыло пользователя
    name: string | null                 // имя поьлзователяв
    publicCardPacksCount: number;       // количество колод
    rememberMe: boolean                 // запоминать ли пользователя
    isLoggedIn: boolean                 // вошел ли пользователь
    error?: string | null
    avatar?: string            // ссылка на аватар пользователя

}
//  не делал динамическую типизацию стэйта, чтобы была возможность поставить везде null
const initialState: InitialStateLoginType = {
    isLoggedIn: false,
    _id: null,
    email: null,
    name: null,
    avatar: "",
    publicCardPacksCount: 0,
    rememberMe: false,
    error: null
}
export const loginReducer = (state: InitialStateLoginType = initialState, action: LoginReducerActionsType): InitialStateLoginType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (
    _id: string | null,
    email: string | null,
    name: string | null,
    publicCardPacksCount: number,
    rememberMe: boolean,
    isLoggedIn: boolean,
    avatar?: string,
    error?: string | null,
) => ({
    type: SET_USER_DATA,
    payload: {isLoggedIn, _id, email, name, avatar, publicCardPacksCount, rememberMe,error}
} as const)


// ThunkCreator  - запрашивет на сервер, залолгинены ли мы. Если да, то меняет через диспатч стэйт
export const getAuthUserData = (): ThunkType => {
    return (dispatch) => {
        // console.log("санка -me-начало")
        // return
        authAPI.me()
            .then(response => {
                if (response.status === 200) { // проверка на то, что ответ пришел правильно
                    let {
                        _id, email, name, publicCardPacksCount, rememberMe, avatar,
                        error
                    } = response.data// деструктуризация приходящих данных
                    dispatch(setAuthUserData(_id, email, name, publicCardPacksCount, rememberMe, true,
                        avatar,error))
                }
            })
    }
}


// ThunkCreator  - отправляет  на сервер логин
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.status === 200) { // проверка на то, что ответ пришел правильно
                    dispatch(getAuthUserData())
                } else {
                    console.log(response)
                    ;
                }
            })
    }
}

// ThunkCreator  - отправляет  на сервер запрос на удаление  логина - yf cfvjv
export const logout = (): ThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                    if (response.status === 200) {
                        dispatch( setAuthUserData(null, null, null, 0,
                            false, false, "", null))
                    }
                }
        )
    }
}


export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type LoginReducerActionsType = SetAuthUserDataActionType