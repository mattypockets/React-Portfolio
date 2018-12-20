import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarMenu, NavbarEnd, NavbarBurger } from 'bloomer';
import './Navbar.css';

class Nav extends React.Component  {

     state = {
        isActive: false
     }

    // Toggle hamburger when clicked
    clicky = () => {
        if (this.state.isActive) {
        this.setState({isActive: false});
        } 
        else this.setState({isActive: true})
    }

    render() {
    return (

    <Navbar>

        <NavbarBrand>
            <NavbarItem>
                <Icon className='fas fa-chevron-left'/> <strong> MG </strong> <Icon className='fas fa-chevron-right' />
            </NavbarItem>

            {/* GitHub/LinkedIn links on Mobile */}
            <NavbarItem isHidden='desktop' href="https://github.com/mattypockets" target="_blank">
                <Icon className='fab fa-github' />
            </NavbarItem>
            <NavbarItem isHidden='desktop' href="https://linkedin.com/in/matthew-gasper" target="_blank">
                <Icon className='fab fa-linkedin' />
            </NavbarItem>

            {/* Burger Nav menu on mobile */}
            <NavbarBurger isActive={this.state.isActive} onClick={this.clicky} />
                

        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.clicky}>
   
            <NavbarItem href='#/'>Home</NavbarItem>
            <NavbarItem href='#/'>About</NavbarItem>
            <NavbarItem href='#/'>Portfolio</NavbarItem>
            <NavbarItem href='#/'>Contact</NavbarItem>

        </NavbarMenu>   

            {/* Github/LinkedIn links */}
            <NavbarEnd>
                <NavbarItem href="https://github.com/mattypockets" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-github' />
                </NavbarItem>
                <NavbarItem href="https://linkedin.com/in/matthew-gasper" target="_blank" isHidden='touch'>
                    <Icon className='fab fa-linkedin' />
                </NavbarItem>
            </NavbarEnd>
        
    </Navbar>
    )
    }
}

export default Nav;