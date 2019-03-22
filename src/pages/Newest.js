import React, { Component } from 'react'
import UploadedContentContainer from './../containers/UploadedContentContainer';
import { NEWEST } from '../constants';

class Newest extends Component {
    constructor(props) {
        super(props)
        this.props.changeSection(NEWEST)
    }
    componentDidMount() {
        // Check if URL has param page, if it does not have one, set current page to 1
        if(this.props.match.params.page !== undefined) {
            this.props.setCurrentPage(this.props.match.params.page)
        }
        else {
            this.props.setCurrentPage(1)
        }
    }
    render () {
        return (
            <main>
                <UploadedContentContainer
                    title={'My latest drawings'} 
                    pagination={12} 
                    currentPage={this.props.currentPage}
                    showPagination  />
            </main>
        )
    }
}

export default Newest