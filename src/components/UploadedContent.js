import React, { Component } from 'react'
import { IMAGE_URL, ART_URL } from './../constants/index';
import ImageContent from './ImageContent';
import Error from './Error';
import PaginationContainer from '../containers/PaginationContainer';
import LoadingImage from './Loading';

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
            this.path = `${ART_URL}?guest=1`;
        }
        else {
            this.path = `${ART_URL}?guest=0`;
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
        fetch(this.path)
        .then(response => response.json())
        .then(data => {
            Object.keys(data).map( key => {
                let url = encodeURI(data[key].title.replace(" ", "-"))
                let image = {}
                let showThumbnail = false
                if( data[key].thumbnail.length > 0 ) {
                    showThumbnail = true;
                }
                if( parseInt(data[key].guest) === 1 ) {
                    image = {
                        "image": `${IMAGE_URL}/${data[key].path}`,
                        "author": data[key].author,
                        "title": data[key].title,
                        "path": data[key].source,
                        "thumbnail": data[key].thumbnail,
                        "showThumbnail": showThumbnail
                    }
                }
                else {
                    image = {
                        "image": `${IMAGE_URL}/${data[key].path}`,
                        "author": data[key].author,
                        "title": data[key].title,
                        "path": `detail/${data[key].id}/${url}`,
                        "thumbnail": `${IMAGE_URL}/${data[key].thumbnail}`,
                        "showThumbnail": showThumbnail
                    }
                }
                images.push(image);
                return null;
            });
            this.setState({
                images,
                pages: Math.ceil(images.length / this.props.pagination),
                imagesLoaded: true
            });
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
                <h2>
                    {this.props.title}
                </h2>
                    {
                        this.state.imagesLoaded === false 
                        ? <LoadingImage />
                        : this.state.images.length === 0
                        ? <Error>
                            <h1>No images where found =(</h1>
                        </Error>
                        : this.props.currentPage <= this.state.pages
                            ? <div>
                                <div className="uploadedContent">
                                {
                                    this.state.images.map( image => {
                                        // Image
                                        let imageObj = <ImageContent 
                                            src={image.image}
                                            thumbnail={image.thumbnail}
                                            showThumbnail={image.showThumbnail}
                                            title={image.title} 
                                            author={image.author} 
                                            key={index}
                                            link={image.path} />
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