import React, { Component } from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { HOME } from '../constants';
import NavContainer from './../containers/NavContainer';

class Header extends Component {
    state = {
        activeLink: HOME
    }
    changeActiveLink = (activeLink) => {
        this.setState({
            activeLink
        })
    } 
    render () {
        return (
            <header>
                <h1 className="logo">
                    <Link to="/">
                        PROCYONIDAE<br />
                        <span>JUNKYARD</span>
                    </Link>
                </h1>
                <NavContainer />
            </header>
        )
    }
}

export default Header