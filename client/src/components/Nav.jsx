import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../modules/Auth';

const NavLinkItem = (props) => (
    <NavLink exact to={props.to} activeStyle={{fontWeight: 'bold'}}>{props.label}</NavLink>
);

const AuthNavItems = () => (
    <span>
        <NavLinkItem to="/protected" label="Protected" />&mdash;
        <Link to="/logout">Logout</Link>
    </span>
);

const UnauthNavItems = () => (
    <span>
        <NavLinkItem to="/login" label="Login" />&mdash;
        <NavLinkItem to="/signup" label="Signup" />
    </span>
);

const Nav = ( {children} ) => {
    const isAuth = Auth.isUserAuthenticated();
    
    return (
        <div>
            <div>
                <NavLinkItem to="/" label="Home" />&mdash;
                {isAuth ? <AuthNavItems/> : <UnauthNavItems/>}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Nav;
