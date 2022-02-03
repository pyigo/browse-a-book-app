import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = ({ setUser }) => {

    const [userName, setUserName] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);
        navigate('/home')


    };
    return (
        <div className="text-center">
            <form id="login-form"
                onSubmit={handleSubmit}>
                <img className="mb-4" src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" width="100" height="100" />
                <h1 className="h3 mb-3 fw-normal">Please log in to see selected books</h1>

                <div className="form-floating">
                    <input type="username" className="form-control" id="floatingInput" placeholder="Username" value={userName}
                        onChange={handleChange} />
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>

            </form>
        </div>
    )
}

export default Login;
