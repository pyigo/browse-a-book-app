import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
    //GOAL: once user click submit we will mimic logging in and conditionally render our nav bar
    const [userName, setUserName] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);

        // we can use useNavigate from react router to redirect our user to a different page  or component
        // *********DO NOT FORGET THE FORWARD / IN  FRONT OF THE PATH IN NAVIGATE()********
        navigate('/MySelection')

        return (
            <div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} />

                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        )

    }


};

export default Login;
