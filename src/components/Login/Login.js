import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../Validation/validators";
import { createField, Input } from "../common/FormControls/FormsControls";
import { login } from "../redux/auth-reduce"
import s from './Login.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField("Email", 'email', Input, [requiredField])}
            </div>
            <div>
                {createField("Password", 'password', Input, [requiredField], 'password')}
            </div>
            <div>
                {createField(null, 'rememberMe', Input, null, 'checkbox')} Remember me
            </div>
            {props.url !== ''
                ? <div>
                    <img src={props.url} className={s.captcha} />
                    <Field placeholder="Enter the captcha" name={'captcha'} component={Input}
                        validate={[requiredField]} />
                </div>
                : ''}
            {props.error &&
                <div className={s.error}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    url: state.auth.url
})

const LoginReduxForm = reduxForm({
    form: 'login'
})(connect(mapStateToProps, {})(LoginForm))

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}

export default connect(mapStateToProps, { login })(Login);