import React, {useEffect} from "react";
import {clearRegisterStatusAC} from "../../../state/register-reducer";
import {useDispatch} from "react-redux";

export const Login = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearRegisterStatusAC());
    }, [])

    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}