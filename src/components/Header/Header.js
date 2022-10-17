import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, loggedOut } = useContext(AuthContext);

    const handleSignOut = () => {
        loggedOut()
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ? <button className='btn btn-primary mx-2' onClick={handleSignOut}>sign out</button> :
                    <>
                        <Link to="/login">login</Link>
                        <Link to="/register">signup</Link>
                    </>
                }
                <span className='text-white mx-2'>
                    {
                        user?.email && user.email
                    }
                </span>
            </div>
        </nav>
    );
};

export default Header;