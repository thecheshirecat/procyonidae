import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavContainer from './../containers/NavContainer';

class Header extends Component {
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