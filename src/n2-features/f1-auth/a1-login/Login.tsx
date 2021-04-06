import {Field, Form, Formik, FormikHelpers} from "formik";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {login, logout} from "../../../state/login-reducer";

interface Values {
    email: string,
    password: string,
    rememberMe:boolean
}

export const Login = () => {
// const loginData=useSelector(state:AppRootStateType=>)
    const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch(login("nya-admin@nya.nya",  "1qazxcvBG", false))
        dispatch(logout())
    })
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe:false
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="john@acme.com"
                        type="email"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}