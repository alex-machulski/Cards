import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:7542/2.0/`,
    // baseURL: `https://neko-back.herokuapp.com/2.0/`,
    headers: {}
})

export const authAPI = {
    me() {
        return instance.post<MeResponseType>(`/auth/me`, {})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<LoginResponseType>(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<LogoutResponseType>(`/auth/me`, {})
    },
    register(email: string, password: string) {
        return instance.post<RegisterResponseType>('auth/register', {email: email, password: password});
    },
    recoverPassword(email: string) {
        return instance.post('auth/forgot', {email})
    }
}

//types
export type MeResponseType = {
    token: string
    tokenDeathTime: number
    __v: number
    _id: string;
    email: string;
    name: string;
    publicCardPacksCount: number; // number of decks
    created: Date;
    updated: Date;
    isAdmin: boolean; // do not work
    verified: boolean; // confirmed mail (if the password was restored - true)
    rememberMe: boolean;
    avatar?: string; // reference to user avatar
    error?: string;
}

type LoginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // number of decks
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // confirmed mail
    rememberMe: boolean
    error?: string
}

type LogoutResponseType = {
    info: string
    error: string
}

type RegisterResponseType = {
    error?: string
}

