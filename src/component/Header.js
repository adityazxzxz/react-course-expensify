import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


const Header = ({startLogout}) => {
    return (
        <header>
            <h1>Exspensify</h1>
            <NavLink to="/dashboard" exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            <button onClick={startLogout}>Logout</button>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout:() => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header);