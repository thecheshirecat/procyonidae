import React, { Component } from 'react'
import UploadContent from '../components/UploadContent';
import { URL, NEWEST } from '../constants';

class Newest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1
        }
        this.props.changeSection(NEWEST)
    }
    componentDidMount() {
        if(this.props.match.params.page !== undefined) {
            this.setState({
                currentPage: this.props.match.params.page
            })
        }
    }
    changePage = (page) => {
        this.setState({
            currentPage: page
        })
    }
    shouldComponentUpdate() {
        return true;
    }
    render () {
        return (
            <main>
                <UploadContent 
                    title={'My latest drawings'} 
                    url={URL} 
                    paginator={12} 
                    currentPage={this.state.currentPage}
                    showPaginator 
                    updatePage={this.changePage} />
            </main>
        )
    }
}

export default Newest