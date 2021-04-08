import React from "react";
import s from './Register.module.css';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {registerTC, setRegisterErrorAC} from "../../../state/register-reducer";
import {AppRootStateType} from "../../../state/store";
import {Redirect} from "react-router-dom";
import {LOGIN_PATH} from "../../../App";

export const Register = () => {

    const dispatch = useDispatch();
    const isRegisterSuccess = useSelector<AppRootStateType, boolean>(state => state.register.isRegistrationSuccess)
    const registerError = useSelector<AppRootStateType, null | string>(state => state.register.registerError)
    const isAppLoading = useSelector<AppRootStateType, boolean>(state => state.app.isAppLoading)

    type FormikErrorType = {
        email?: string
        password?: string
        repeatPassword?: string
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Must be 8 characters or more';
            }

            if (values.repeatPassword !== values.password) {
                errors.repeatPassword = 'Passwords don\'t match';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(registerTC(values.email, values.password));
        }
    })

    if (isRegisterSuccess) {
        return <Redirect to={LOGIN_PATH}/>
    }

    const onFocusEmailInput = () => {
        if (registerError) {
            dispatch(setRegisterErrorAC(null));
        }
    }

    return (
        <div className={s.registerBlock}>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <span>Email: </span>
                <div className={s.inputElement}>
                    <input type="email" {...formik.getFieldProps('email')} onFocus={onFocusEmailInput}/>
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                </div>
                <span>Password: </span>
                <div className={s.inputElement}>
                    <input type="password" {...formik.getFieldProps('password')}/>
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                </div>
                <span>Repeat password: </span>
                <div className={s.inputElement}>
                    <input type="password" {...formik.getFieldProps('repeatPassword')}/>
                    {formik.touched.repeatPassword && formik.errors.repeatPassword ?
                        <div style={{color: 'red'}}>{formik.errors.repeatPassword}</div> : null}
                </div>
                <div>
                    <button type={"submit"} disabled={isAppLoading}>Register</button>
                </div>
                <div style={{color: 'red'}}>
                    {registerError}
                </div>
                {isAppLoading && <div><h2>Loading...</h2></div>}
            </form>
        </div>
    )
}