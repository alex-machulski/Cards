import React from "react";
import s from "../f1-auth/a2-register/Register.module.css";
import {useFormik} from "formik";

export const RestorePassword = () => {

    type FormikErrorType = {
        email?: string
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
        onSubmit: values => {
            alert(values.email);
        }
    })

    return (
        <div className={s.registerBlock}>
            <h1>Recover Password</h1>
            <form onSubmit={formik.handleSubmit}>
                <span>Email: </span>
                <div className={s.inputElement}>
                    <input type="email" {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <button type={"submit"}>Recover</button>
                </div>
            </form>
        </div>
    )
}