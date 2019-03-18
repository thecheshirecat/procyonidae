import React, { Component } from 'react'
import ImageContainer from './ImageContainer';
import { Link } from 'react-router-dom';
import { URL } from '../constants'

/* URL to search the images */

class UploadContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentPage: this.props.currentPage,
            pages: 1
        }
        /* URL to fetch images, guests or not */
        this.url = this.props.url;
        if(this.props.guests) {
            this.path = `${URL}/guests`;
        }
        else {
            this.path = `${URL}/images`;
        }
    }
    static defaultProps = {
        paginator: 6,
        guests: false,
        showPaginator: false,
        currentPage: 1
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.currentPage !== undefined) {
            if(prevProps.currentPage.toString() !== this.props.currentPage.toString()) {
                this.setState({
                    currentPage: this.props.currentPage
                })
            }
        }
    }
    componentDidMount() {
        var images = [];
        fetch(this.url)
        .then(response => response.json())
        .then(data => {
            Object.keys(data).map( key => {
                let image = {
                    "image": `${this.path}/${data[key].folder}/${data[key].image}`,
                    "author": data[key].author,
                    "title": data[key].title
                }
                images.push(image);
                return null;
            });
            this.setState({
                images,
                pages: Math.ceil(images.length / this.props.paginator)
            })
        })
    }
    updatePage = (page) => {
        this.props.updatePage(page);
    }
    // Creating the paginator
    paginatorCreator() {
        var pages = []; 
        for( let i = 1; i <= this.state.pages; i++) {
            let active= '';
            if(i === this.state.currentPage) {
                active = 'active';
            }
            pages.push(
                <Link 
                    to={`/newest/${i}`} 
                    key={i} 
                    onClick={() => this.updatePage(i)}
                    className={active}
                    >
                    {i}
                </Link>
            )
        }
        return pages
    }
    render () {
        // Setting variables to show X items and pages
        var startingItem = (this.state.currentPage - 1) * this.props.paginator;
        var numItems = this.props.paginator;
        if( this.state.currentPage > 1) {
            numItems = this.state.currentPage * this.props.paginator
        }
        var index = 0;
        return (
            <div className={`uploadSection`}>
                <h2 className={this.props.additionalClasses}>
                    {this.props.title}
                </h2>
                <div>
                    {
                        this.state.images.length === 0 
                        ? <div>No images found</div>
                        : startingItem > this.state.images.length ?
                        <div>There are not enough images still =(</div>
                        : <div>
                            <div className="uploadedContent">
                            {
                                this.state.images.map( image => {
                                    if(index < startingItem) {
                                        index++;
                                        return null;
                                    }
                                    else {
                                        if( startingItem < numItems ) {
                                            let imageObj = <ImageContainer 
                                            src={image.image} 
                                            title={image.title} 
                                            author={image.author} 
                                            key={startingItem} />
                                            startingItem++;
                                            index++;
                                            return imageObj;
                                        }
                                        else {
                                            index++;
                                            return null;
                                        }
                                    }
                                })
                            }
                            </div>
                            {
                                this.state.images.length > this.props.paginator && this.props.showPaginator
                                ?
                                    <div className="paginator">{this.paginatorCreator()}</div>
                                : null
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default UploadContent