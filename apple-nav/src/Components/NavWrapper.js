import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import MenuData from '../MenuData';
import './Nav.scss';

const NavWrapper = props => {

    return(
        <div className='nav-wrapper'>
        <div className='nav-bar'>
          <ul className='menu-items'>
            {MenuData.map(menuLink => {
                return (
                <Nav 
                key={menuLink.name} 
                name={menuLink.name} 
                path={menuLink.path} 
                icon={menuLink.icon} />);
            })}
          </ul>
        </div>
        </div>
)
};

export default NavWrapper;