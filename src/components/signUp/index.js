import React from "react";
import {Formik} from "formik";
import {Button, TextField} from "@material-ui/core";
import ValidationSchema from "./validation"
import Alert from "react-bootstrap/Alert";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    registerForm : {
        background: "#BFC2BE",
        height:"300px",
        margin: "10px",
        padding: "30px"
    },
    containerForm : {
        content: '',
        display: "block",
        height: "100px",
        position: "absolute",
        top: "100px",
        left:"500px",
        zIndex: "-1",
        width:"400px",
    },
    inputForm : {
        background: "none",
        border: "none",
        lineHeight: "1em",
        fontWeight: "300",
        padding: "0.125em 0.25em",
        width: "100%",
    },
    buttonForm : {
        background: "rgba(255,255,255,0.25)",
        border: "1px solid #333",
        height:"30px",
        width : "80px",
        padding:" 10px",
        margin: "30px 100px"
    }
}));
const FormSignUp =()=>{
    const classes = useStyles();
    return(
        <Formik
            initialValues={{
            email : "",
            password:"",
             confirmePassword:""
            }
            }
            validationSchema={ValidationSchema}
            onSubmit={values => {
                let data = {
                    ...values,
                    email: values.email ,
                    password: values.password,
                    confirmPassword: values.confirmePassword
                };

                console.log(data)
            }}
        render={({errors,touched,handleChange,handleSubmit,values}) =>(
            <div className={classes.containerForm}>
            <form className={classes.registerForm} onSubmit={handleSubmit}>
                <TextField
                    className={classes.inputForm}
                    id="email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    value={values.email}
                />
                {errors.email && touched.email ? <Alert variant="danger">{errors.email}</Alert> : null}
                <TextField
                    className={classes.inputForm}
                    id="password"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                />
                {errors.password && touched.password ? <Alert variant="danger">{errors.password}</Alert> : null}
                <TextField
                    className={classes.inputForm}
                    id="confirmePassword"
                    name="confirmePassword"
                    label="confirme password"
                    onChange={handleChange}
                    value={values.confirmePassword}
                    type="password"
                />
                {errors.confirmePassword && touched.confirmePassword ? <Alert variant="danger">{errors.confirmePassword}</Alert> : null}                <Button className={classes.buttonForm} type="submit">Submit</Button>
            </form>
            </div>
        )
        }
        />
    )
};
export default FormSignUp;