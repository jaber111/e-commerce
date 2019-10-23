import React from "react";
import {Formik} from "formik";
import {Button, TextField} from "@material-ui/core";
import ValidationSchema from "./validation"
import Alert from "react-bootstrap/Alert";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../redux/userRedux/userActions";



const useStyles = makeStyles(theme => ({
    registerForm : {
        background: "rgba(58, 122, 156, 0.6)",
        height:"300px",
        margin: "10px",
        padding: "30px",
        borderRadius: "30px",
        textAlign: "centre"

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
        color: "#fff !important",
        textTransform: "uppercase",
        textDecoration: "none",
        background:"rgba(48, 70, 56, 0.91)",
        padding: "20px",
        borderRadius: "5px",
        border: "none",
        transition: "all 0.4s ease 0s",
        margin: "30px 100px",
        height:"30px",
        textAlign:"center"
    }
}));
const FormSignIn =()=>{
    const dispatch = useDispatch();

    const classes = useStyles();
    return(
        <Formik
            initialValues={{
            username : "",
            password:""
            }
            }
            onSubmit={(values, formikProps) =>
                dispatch(
                    authenticate(
                        {
                            username: values.username,
                            password: values.password
                        },
                        formikProps.setErrors
                    )
                )
            }
        render={({errors,touched,handleChange,handleSubmit,values}) =>(
            <div className={classes.containerForm}>
            <form className={classes.registerForm} onSubmit={handleSubmit}>
                <h3>LOGIN</h3>
                <TextField
                    className={classes.inputForm}
                    id="usermane"
                    name="username"
                    label="username"
                    onChange={handleChange}
                    value={values.username}
                />
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

                <Button className={classes.buttonForm} type="submit">Submit</Button>
            </form>
            </div>
        )
        }
        />
    )
};
export default FormSignIn;