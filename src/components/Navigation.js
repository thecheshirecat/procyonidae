import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {
    changeActiveLink = (name) => {
        this.props.setActiveLink(name);
    }
    render () {
        const navOptions = [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "Newest",
                url: "/newest"
            },
            {
                name: "Popular",
                url: "/popular"
            },
            {
                name: "Share your art",
                url: "/share-your-art"
            }
        ]
        return (
            <nav>
                <ul>
                    {
                        navOptions.map(nav => {
                            let active = ""
                            this.props.activeLink === nav.name ? active = "active" : active = ''
                            return <li key={nav.name}>
                                    <Link 
                                        to={nav.url} 
                                        onClick={() => this.changeActiveLink(nav.name)}
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