import Logo from '../../assets/logo.png';
import './Navbar.scss';

import { NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar1 = () => {
    const { currentUser } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logged out successfully");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    }

    return (
        <header>
            <NavLink to="/" className='logo'>
                <img src={Logo} alt='kdan_logo' />
            </NavLink>
            <nav>
                <NavLink to="/" title='predictions' >Home</NavLink>
                <NavLink to="/about" title='about-us' >About</NavLink>
                <div className="btn-wrapper">
                    {currentUser ? <NavLink className="btn" onClick={handleLogout} title='signout'>Logout</NavLink> :
                        <NavLink className="btn" to="/login" title='signout'>Log In</NavLink>}
                </div>
            </nav>

        </header>
    );
}

export default Navbar1;