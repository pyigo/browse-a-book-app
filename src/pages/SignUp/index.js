import React from "react";
import "./signup.css";
import { useState } from 'react';
import axios from "axios";


const SignUp = ({ }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const userLogin = {
        firstname: firstName,
        lastname: lastName,
        email: email,

    }

    const handleChange = (e) => {
        setUserName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);
    }

    const response = axios.post('http://localhost:8080/api/v1/users', userLogin)
    if (response.status === 200) {
        setFirstName('')
        setLastName('')
        setEmail('')
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
                                <label htmlFor="user" className="label" >
                                    Email
                                </label>
                                <input id="user" type="text" className="input" value={email}
                                    onChange={e => setEmail(e.target.value)} />
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
