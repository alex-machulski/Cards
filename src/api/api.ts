import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

export const authAPI = {
    register(email: string, password: string) {
        return instance.post<RegisterResponseType>('auth/register', {email: email, password: password});
    }
};

//types
type RegisterResponseType = {
    error?: string
}