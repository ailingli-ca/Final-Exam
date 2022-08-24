import React from 'react';
import { Session } from '../requests'
import { NavLink} from 'react-router-dom';


const NavBar = ({ currentUser, onSignOut}) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav className="nav-bar">
            
            <NavLink to='/auctions'><img src='images/logo.jpg' width="70px" alt="Logo" className='logo'/></NavLink>
            
            <NavLink to='/' className="nav-links">Home</NavLink>
            |
            <NavLink to='/auctions' className="nav-links">Auctions</NavLink>
            |
        {
            currentUser ? (
                <>
                    <NavLink to='/auctions/new' className="nav-links">New Auction</NavLink>
                    |
                    <span>Welcome, { currentUser.name }</span>
                    |
                    <button onClick={handleSignOut}>Sign Out</button>
                    
                </>
            ) : (
                    <>
                        <NavLink to='/sign_in' className="nav-links">Sign In</NavLink>
                        |
                        <NavLink to='/sign_up'className="nav-links">Sign Up</NavLink>
                    </>
                )
            }
        </nav>
    )
}

export default NavBar;