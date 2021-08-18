import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {

    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
       <Fragment>
            <nav className='nav-bar-main'>
                <div className='nav-container-main'>
                    <NavLink exact to='/trangchu' className='nav-logo-main'>
                        UpToLearn <i className="fa fa-code pl-5"></i>
                    </NavLink>

                    <ul className={click ? "nav-menu-main active" : "nav-menu-main"}>
                    <li className='nav-items'>
                        <NavLink onClick={handleClick} exact to='/trangchu' activeClassName='active' className='nav-links'>Home</NavLink>
                    </li>

                    <li className='nav-items'>
                        <NavLink onClick={handleClick} exact to='/tintuc' activeClassName='active' className='nav-links'>News</NavLink>
                    </li>
                    <li className='nav-items'>
                        <NavLink onClick={handleClick} exact to='/login-register' activeClassName='active' className='nav-links'>User</NavLink>
                    </li> 
                    <li className='nav-items'>
                        <NavLink onClick={handleClick} exact to='/cv-admin-baoduong' activeClassName='active' className='nav-links'>About Me</NavLink>
                    </li> 
                </ul>
                <div className='nav-icons mr-3 pr-5' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                </div>
            </nav>
       </Fragment>
    )
}
