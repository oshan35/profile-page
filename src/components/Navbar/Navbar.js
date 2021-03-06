import React, { useState } from 'react';
import {Nav, NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavLink,NavItem} from './Navbar.elements';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

const name="AlpahaBlue";

const Navbar = () =>{
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    {name}
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> :<FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/aboutus'>About us</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;