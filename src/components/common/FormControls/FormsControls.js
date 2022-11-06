import React from "react"
import { Field } from "redux-form";
import { requiredField } from "../../../Validation/validators";
import styles from "./FormsControls.module.css"

const FormControl = ({ input, meta: {touched, error}, child, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError ? <span>{error}</span> : ''}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...props} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...props} /></FormControl>
}

export const createField = (placeholder, name, component, validator, type) => (
    <Field placeholder={placeholder} name={name} component={component}
        validate={validator} type={type}
    />
)
