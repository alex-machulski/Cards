import axios from "axios";

// экземпляр axios , в котором указываются общие свойства
const instance = axios.create({
    withCredentials: true, // разрешить запрос на другие серверы
    // путь на локальный сервер
    baseURL: `http://localhost:7542/2.0/`,
    // на удаленный сервер хероку
    // baseURL: `https://neko-back.herokuapp.com/2.0/`,
    headers: {}
})


export const authAPI = {
    // проверка на залогиненность
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
    _id: string; // айдишник пользователя
    email: string; //мыло пользователя ()
    name: string; // имя поьлзователя
    publicCardPacksCount: number; // количество колод
    created: Date; // дата создания пользователя
    updated: Date; // дата обновления пользователя
    isAdmin: boolean; // не работает
    verified: boolean; // подтвердил ли почту ( если восстанавливал пароль, то тру)
    rememberMe: boolean; // запоминать ли пользователя
    avatar?: string; // ссылка на аватар пользователя
    error?: string;
}

type LoginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
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

