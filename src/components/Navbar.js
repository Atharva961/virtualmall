import React from 'react';
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
    let navigate = useNavigate();
    const handleLogout = () => {
        console.log("Logging out");
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i class="fa-solid fa-store"></i>VirtualMall</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {!localStorage.getItem('token') ? <form className="d-flex">
                                <Link className='btn btn-outline-primary mx-2' to="/login" role="button">Login</Link>
                                <Link className='btn btn-outline-primary mx-2' to="/signup" role="button">Sign Up</Link>
                            </form> : <Link className='btn btn-outline-primary mx-2' to="/login" role="button" onClick={handleLogout}>Logout</Link>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
