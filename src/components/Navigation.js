import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { HOME, NEWEST, POPULAR, SHARE_ART, GUESTS, NEWEST_URL_, GUESTS_URL_, SHARE_ART_URL_, USER_AREA_URL_, USER_AREA } from './../constants';

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
                url: `/${NEWEST_URL_}`
            },
            {
                name: POPULAR,
                url: "/popular"
            },
            {
                name: GUESTS,
                url: `/${GUESTS_URL_}`
            },
            {
                name: SHARE_ART,
                url: `/${SHARE_ART_URL_}`
            },
            {
                name: USER_AREA,
                url: `/${USER_AREA_URL_}`
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
                </ul>
            </nav>
        )
    }
}

export default Navigation