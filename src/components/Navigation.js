import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { HOME, NEWEST, POPULAR, SHARE_ART, GUESTS } from './../constants';

/*
    Clicking the navigation will fire two actions:
    1. Change the current page of the pagination to 1
    2. Set the store state "section" to the name of the section clicked
*/

class Navigation extends Component {
    navHandleClick = (name) => {
        this.props.changeSection(name);
        this.props.setCurrentPage();
    }
    render () {
        const navOptions = [
            {
                name: HOME,
                url: "/"
            },
            {
                name: NEWEST,
                url: "/newest"
            },
            {
                name: POPULAR,
                url: "/popular"
            },
            {
                name: GUESTS,
                url: "/guests"
            },
            {
                name: SHARE_ART,
                url: "/share-your-art"
            }
        ]
        return (
            <nav>
                <ul>
                    {
                        navOptions.map(nav => {
                            let active = ""
                            this.props.section === nav.name ? active = "active" : active = ''
                            return <li key={nav.name}>
                                    <Link 
                                        to={nav.url} 
                                        onClick={() => this.navHandleClick(nav.name)}
                                        className={active}
                                        >
                                    <span>{nav.name}</span>
                                </Link>
                            </li>
                        })
                    }
                    {/* <li>
                        <a href="/">
                            <span>Donate</span>
                        </a>
                    </li> */}
                </ul>
            </nav>
        )
    }
}

export default Navigation