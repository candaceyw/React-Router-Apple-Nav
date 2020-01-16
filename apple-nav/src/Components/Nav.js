import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (props.path)
    ? <li key={props.name} className='menu-item'>
        <NavLink to={props.path}>
          {props.icon
            ? <img src={props.icon} alt={props.name} className='menu-icon' style={{fill:"#FFFFFF"}} />
            : props.name
          }
        </NavLink>
      </li>
    : <div></div>;
}

export default Nav;