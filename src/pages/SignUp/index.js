import React from "react";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    // Sign up Form connection to database
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // sign up Form object
        if (firstName === "" || lastName === "" || signUpEmail === "" || signUpPassword === "") {
            setErrorMessage("Invalid input");
        } else {
            const userSignUp = {
                firstname: firstName,
                lastname: lastName,
                email: signUpEmail,
                password: signUpPassword
            };

            // user sign up REST call 
            const result = await axios.post('http://localhost:8080/api/v1/users', userSignUp)
                .then((data) => {
                    console.log(data);
                    if (data.status === 200) {
                        console.log(data.data);

                        //redirect user to sign in page after signed up
                        navigate("/signIn");
                    } else {
                        console.log(data.message)
                        setErrorMessage(data.message)
                    }
                })
                .catch((err) => {
                    console.log(err.response)
                    setErrorMessage(err.response.data.message)
                });
        }
    };

    return (
        // Sign up form code is taken from this website https://codepen.io/khadkamhn/pen/ZGvPLo

        <div className="login-wrap">
            <form onSubmit={handleSubmit}>
                <div className="login-html">
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">
                        Sign Up
                    </label>
                    <div className="login-form">
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="signup-firstname" className="label">
                                    First Name
                                </label>
                                <input id="first-name" type="text" className="input" value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="group">
                                <label htmlFor="signup-lastname" className="label">
                                    Last Name
                                </label>
                                <input id="last-name" type="text" className="input" value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="group">
                                <label htmlFor="signup-email" className="label">
                                    Email Address
                                </label>
                                <input id="signup-email" type="text" className="input" value={signUpEmail}
                                    onChange={(e) => setSignUpEmail(e.target.value)} />
                            </div>
                            <div className="group">
                                <label htmlFor="signup-password" className="label">
                                    Password
                                </label>
                                <input
                                    id="signup-password"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="signup-password" className="label">
                                    Repeat Password
                                </label>
                                <input
                                    id="signup-password"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                />
                            </div>
                            {errorMessage &&
                                <div className="bg-danger mb-4"> {errorMessage} </div>}
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
