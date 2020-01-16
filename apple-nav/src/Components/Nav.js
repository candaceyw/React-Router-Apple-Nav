import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
    <div>
    <li className='menu-item'>
        <NavLink to={props.path} >
        {props.name}
        </NavLink>
      </li>
      </div>

)
}

export default Nav;