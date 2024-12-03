import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const links = <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/users">Users</Link>
        <Link to="/">Home</Link>
    </div>

    const handleSignOut = () => {
        logout()
            .then(() => {
                console.log("User signed out successfull")
                navigate("/login")
            })
            .catch((err) => {
                console.log("ERR: ", err)
            })
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex gap-3"> 
                            <button className="btn btn-error" onClick={handleSignOut}>Logout</button>
                            <Link to="/profile"><button className="btn btn-info">Profile</button></Link>
                        </div> :
                        <Link to="/login"><button className="btn btn-neutral">Please Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;