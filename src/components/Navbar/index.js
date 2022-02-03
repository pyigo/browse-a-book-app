import React from 'react';
import Usercontext from "../../contexts/UserContext";
import { Link } from 'react-router-dom';
import { useContext } from "react";
const Navbar = () => {

    const user = useContext(Usercontext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="genre">Genre</Link>
                        <Link className="nav-link" to="buyAbook">BuyABook</Link>
                        {
                            !user
                                ?
                                <Link className="nav-link" to="login">Login</Link>
                                :
                                <Link className="nav-link" to="mySelection">MySelection</Link>

                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
