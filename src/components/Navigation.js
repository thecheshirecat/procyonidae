import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { HOME, NEWEST, POPULAR, SHARE_ART } from '../constants';

class Navigation extends Component {
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
                                        onClick={() => this.props.changeSection(nav.name)}
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