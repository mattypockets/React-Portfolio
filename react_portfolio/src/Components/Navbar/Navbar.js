import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarMenu, NavbarLink, NavbarDropdown, NavbarEnd, brand, NavbarBurger, NavbarStart} from 'bloomer';

class Nav extends React.Component  {

     state = {
        isActive: false
     }

    render() {
    return (

    <Navbar>

        <NavbarBrand>
            <NavbarItem>
                <img src={brand} style={{ marginRight: 5 }} /> Matthew Gasper
            </NavbarItem>
            {/* GitHub/LinkedIn links on Mobile */}
            <NavbarItem isHidden='desktop' href="https://github.com/mattypockets" target="_blank">
                <Icon className='fab fa-github' />
            </NavbarItem>
            <NavbarItem isHidden='desktop' href="https://linkedin.com/in/matthew-gasper" target="_blank">
                <Icon className='fab fa-linkedin' />
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>
                <NavbarItem href='#/'>Home</NavbarItem>
                <NavbarItem hasDropdown isHoverable>
                    <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                    <NavbarDropdown>
                        <NavbarItem href='#/'>Home</NavbarItem>
                        <NavbarItem href='#/'>About</NavbarItem>
                        <NavbarItem href='#/'>Portfolio</NavbarItem>
                        <NavbarItem href='#/'>Contact</NavbarItem>
                    </NavbarDropdown>
                </NavbarItem>
            </NavbarStart>

            {/* Github/LinkedIn links */}
            <NavbarEnd>
                <NavbarItem href="https://github.com/mattypockets" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-github' />
                </NavbarItem>
                <NavbarItem href="https://linkedin.com/in/matthew-gasper" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-linkedin' />
                </NavbarItem>
            </NavbarEnd>
        </NavbarMenu>
    </Navbar>
    )
    }
}

export default Nav;