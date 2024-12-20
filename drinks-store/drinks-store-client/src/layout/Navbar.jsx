import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = <div className='flex gap-5 text-[16px]'>
        <Link to="/">Home</Link>
        <Link to="/addDrinks">Add Drinks</Link>
        <Link to="/users">Users</Link>
    </div>
    return (
        <div>
            <div className="navbar bg-blue-800 text-white">
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
                    <Link to="/"><a className="btn btn-ghost text-xl">BD Drinks Store</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/signin"><a className="btn btn-neutral">SignIn</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;