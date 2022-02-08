import React from 'react';
import Usercontext from "../../Contexts/UserContext";
import { Link } from 'react-router-dom';
import { useContext } from "react";

const Navbar = () => {

    const user = useContext(Usercontext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-muted" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link className="nav-link text-muted" to="buyAbook">Buy A Book</Link>
                        {
                            !user
                                ?
                                <Link className="nav-link text-muted" to="login">Login</Link>
                                :
                                <Link className="nav-link text-muted" to="mySelection">MySelection</Link>

                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
