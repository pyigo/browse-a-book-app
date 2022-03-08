import React from "react";
import "./signup.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userLogin = {
            email: loginEmail,
            password: loginPassword
        }

        console.log(userLogin);

        const response = axios
            .post(
                `http://localhost:8080/api/v1/users/login`, userLogin
            )
            .then((data) => {
                console.log(data)
                if (data.status === 200) {
                    console.log(data.data)
                    //redirect to my selection
                    navigate('/mySelection')
                }


            })
            .catch((err) => console.error(err));
    }




    return (
        // Sign up form code is taken from this website https://codepen.io/khadkamhn/pen/ZGvPLo

        <div className="login-wrap">
            <form onSubmit={handleSubmit}>
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" className="tab">
                        Sign In
                    </label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">
                        Sign Up
                    </label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="login-email" className="label" >
                                    Email
                                </label>
                                <input id="login-email" type="text" className="input" value={loginEmail}
                                    onChange={e => setLoginEmail(e.target.value)} />
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
                                    onChange={e => setLoginPassword(e.target.value)}
                                />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label htmlFor="check">
                                    <span className="icon"></span> Keep me Signed in
                                </label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">
                                    Username
                                </label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Password
                                </label>
                                <input
                                    id="pass"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Repeat Password
                                </label>
                                <input
                                    id="pass"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Email Address
                                </label>
                                <input id="pass" type="text" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
