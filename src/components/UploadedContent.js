import React, { Component } from 'react'
import { URL } from './../constants/index';
import ImageContent from './ImageContent';
import PaginationContainer from '../containers/PaginationContainer';

/* URL to search the images */

class UploadedContent extends Component {
    constructor(props) {
        super(props);
        // State to get only images and number of pages
        this.state = {
            images: [],
            pages: 1,
            imagesLoaded: false
        }
        /* URL to fetch images, guests or not */
        if(this.props.guests) {
            this.path = `${URL}/guests`;
        }
        else {
            this.path = `${URL}/images`;
        }
    }
    // Default props if not specified
    static defaultProps = {
        pagination: 6,
        showPagination: false,
        guests: false
    }
    componentDidMount() {
        var images = [];
        fetch(this.props.url)
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
                pages: Math.ceil(images.length / this.props.pagination),
                imagesLoaded: true
            })
        })
    }
    // Creating the pagination
    paginationCreator() {
        return <PaginationContainer
            pages={this.state.pages}
            linkTo={'/newest'} />
    }
    render () {
        // Setting variables to show X items and pages
        var startingItem = (this.props.currentPage - 1) * this.props.pagination;
        var numItems = this.props.currentPage * this.props.pagination
        var index = 0;
        return (
            <div className={`uploadSection`}>
                <h2 className={this.props.additionalClasses}>
                    {this.props.title}
                </h2>
                    {
                        this.state.imagesLoaded === false 
                        ? <div class="lds-ring">
                            <div>
                                <span>Loading images</span>
                            </div>
                        </div>
                        : this.state.images.length === 0
                        ? <div class="notFound">
                            <h1>No images where found =(</h1>
                        </div>
                        : this.props.currentPage <= this.state.pages
                            ? <div>
                                <div className="uploadedContent">
                                {
                                    this.state.images.map( image => {
                                        // Image
                                        let imageObj = <ImageContent 
                                            src={image.image} 
                                            title={image.title} 
                                            author={image.author} 
                                            key={index} />
                                        if(index < startingItem) {
                                            index++;
                                            return null;
                                        }
                                        else {
                                            if( startingItem < numItems ) {
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
                                    this.props.showPagination 
                                    ? this.paginationCreator()
                                    : null
                                    }
                            </div>
                        : <div className="notFound">
                            <h1>Still not enough images :(</h1>
                            <p>Maybe on a near future there will be more!</p>
                        </div>
                    }
            </div>
        )
    }
}

export default UploadedContent