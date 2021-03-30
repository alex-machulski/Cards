import React from "react";
import {NavLink} from "react-router-dom";
import {ENTER_PASS_PATH, LOGIN_PATH, PROFILE_PATH, REGISTER_PATH, RESTORE_PASS_PATH, TEST_PAGE_PATH } from "../../../App";
import styles from './Main.module.css';

export const Main = () => {

    return (
        <div>
            <NavLink className={styles.navBlock} to={LOGIN_PATH}>Login</NavLink>
            <NavLink className={styles.navBlock} to={REGISTER_PATH}>Register</NavLink>
            <NavLink className={styles.navBlock} to={PROFILE_PATH}>Profile</NavLink>
            <NavLink className={styles.navBlock} to={RESTORE_PASS_PATH}>Restore Password</NavLink>
            <NavLink className={styles.navBlock} to={ENTER_PASS_PATH}>Enter Password</NavLink>
            <NavLink className={styles.navBlock} to={TEST_PAGE_PATH}>Test Page</NavLink>
        </div>
    )
}