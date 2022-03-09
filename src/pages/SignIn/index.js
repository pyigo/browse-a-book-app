import React from "react";
import "../SignUp/signup.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    // Login Form connection to database
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // login form object
        const userLogin = {
            email: loginEmail,
            password: loginPassword,
        };
        // user login REST call
        const response = await axios
            .post(`http://localhost:8080/api/v1/users/login`, userLogin)
            .then((data) => {
                console.log(data);
                if (data.status === 200) {
                    console.log(data.data);
                    //redirect user to my selection after logged in
                    navigate("/mySelection");
                } else {
                    console.log(data.message)
                    setErrorMessage(data.message)
                }
            })
            .catch((err) => {
                console.log(err.response)
                setErrorMessage(err.response.data.message)
            });
    };

    return (

        // Sign up form code is taken from this website https://codepen.io/khadkamhn/pen/ZGvPLo
        <div className="login-wrap">
            <form onSubmit={handleSubmit}>
                <div className="login-html">
                    <input
                        id="tab-1"
                        type="radio"
                        name="tab"
                        className="sign-in"
                        checked="{true}"
                    />
                    <label htmlFor="tab-1" className="tab">
                        Sign In
                    </label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="login-email" className="label">
                                    Email
                                </label>
                                <input
                                    id="login-email"
                                    type="text"
                                    className="input"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="login-password" className="label">
                                    Password
                                </label>
                                <input
                                    id="login-password"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label htmlFor="check">
                                    <span className="icon"></span> Keep me Signed in
                                </label>
                            </div>

                            {errorMessage &&
                                <div className="bg-danger mb-4"> {errorMessage} </div>}

                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>

                            {/* sign up form */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
