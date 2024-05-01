import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addspot'>Add Tourist Spot</NavLink></li>
        <li><NavLink to='/mylist'>My List</NavLink></li>
        <li><NavLink to='/allspots'>All Tourist Spots</NavLink></li>
        <li><NavLink to='/profile'>User Profile</NavLink></li>
    </>;

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">VoyageVista</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {currentUser ? (
                        <div className="profile-wrapper">
                            <span className="profile-name">{currentUser.displayName}</span>
                            <img className="rounded-full w-10 h-10 cursor-pointer" src={currentUser.photoURL} alt={currentUser.displayName} />
                        </div>
                    ) : null}
                    {user ? (
                        <button onClick={logOut} className="btn bg-red-400">Logout</button>
                    ) : (
                        <Link to='/login' className="btn bg-teal-300">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
