import {Field, Form, Formik, FormikHelpers} from "formik";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {getAuthUserData, login} from "../../../state/login-reducer";
import {AppRootStateType} from "../../../state/store";
import {PROFILE_PATH} from "../../../App";

interface Values {
    email: string,
    password: string,
    rememberMe: boolean
}

export const Login = () => {
    const isLoggedIn: boolean = useSelector((state: AppRootStateType) => state.login.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    },[])

    const formikOnSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        dispatch(login(values.email, values.password, values.rememberMe))
return

    }
    if (isLoggedIn){
        return <Redirect to={PROFILE_PATH}/>
    }

    return (
        <div>
                <h1>Login</h1>
                <Formik
                initialValues={{
                email: "",
                password: "",
                rememberMe: false
            }}
                onSubmit={formikOnSubmit}
                >
                <Form>
                <label htmlFor="email">Email</label>
                <Field
                id="email"
                name="email"
                placeholder="email"
                type="email"
                />
                <label htmlFor="password">Password</label>
                <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
                />
                <Field
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                />

                <button type="submit">Submit</button>
                </Form>
                </Formik>
            </div>
    )
}