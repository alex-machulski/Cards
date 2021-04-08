import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {getAuthUserData, InitialStateLoginType, logout} from "../../state/login-reducer";
import {LOGIN_PATH} from "../../App";
import {NavLink} from "react-router-dom";

export const Profile = () => {
    const loginState: InitialStateLoginType = useSelector((state: AppRootStateType) => state.login)
    const [isLogged,setIsLogged] = useState<boolean>(loginState.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])
    const logOutHandler = () => {
        dispatch(logout())
        setIsLogged(false)
    }

    return (
        <div>
            <h1>Profile</h1>
            {isLogged
                ?
                <div>
                    <button onClick={logOutHandler}>LogOut</button>
                    <div>name: {loginState.name}</div>
                    <div>email: {loginState.email}</div>
                    <div>publicCardPacksCount: {loginState.publicCardPacksCount}</div>
                    <img src={loginState.avatar} alt="avatar"/>
                </div>
                :
                <NavLink to ={LOGIN_PATH}>Please, login</NavLink>
            }
        </div>

    )
}