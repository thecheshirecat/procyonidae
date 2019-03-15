import React, { Component } from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        activeLink: "Home"
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
                <Navigation setActiveLink={this.changeActiveLink} activeLink={this.state.activeLink}/>
            </header>
        )
    }
}

export default Header