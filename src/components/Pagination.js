import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: this.props.pages,
            active: this.props.currentPage,
            linkTo: this.props.linkTo
        }
    }
    createPages = () => {
        let pages = []
        for(let i = 1; i <= this.state.pages; i++) {
            let active = ''
            if(i === parseInt(this.props.currentPage)) {
                active = 'active';
            }
            pages.push(
                <Link
                    key={i}
                    className={active}
                    to={`${this.state.linkTo}/${i}`}
                    onClick={() => this.props.setCurrentPage(i)}>
                    {i}
                </Link>
            )
        }
        return pages;
    }
    render() {
        return (
            <div className="pagination">
                {this.createPages()}
            </div>
        );
    }
}

export default Pagination;