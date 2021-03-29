import React from "react";
import {NavLink} from "react-router-dom";

export const Main = () => {

    return (
        <div>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            <NavLink to={"/404"}>Error 404</NavLink>
            <NavLink to={"/restore-pass"}>Restore Password</NavLink>
            <NavLink to={"/enter-pass"}>Enter Password</NavLink>
            <NavLink to={"/test"}>Test Page</NavLink>
        </div>
    )
}