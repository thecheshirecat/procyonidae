import React, { Component } from 'react'
import ImageContainer from './ImageContainer';

/* URL Para buscar las imágenes */
const URL = 'http://10.10.2.19:8010';

class UploadContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        /* url para saber donde buscar las imágenes */
        this.url = this.props.url;
        if(this.props.guests) {
            this.path = `${URL}/guests`;
        }
        else {
            this.path = `${URL}/images`;
        }
    }
    static defaultProps = {
        paginator: 7,
        guests: false
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
                images
            })
        })
    }
    render () {
        var i = -1;
        return (
            <div className={`uploadSection`}>
                <h2 className={this.props.additionalClasses}>
                    {this.props.title}
                </h2>
                <div className="uploadedContent">
                    {
                        this.state.images.length === 0 
                        ? <div>No images found</div>
                        : this.state.images.map( image => {
                            if( i < this.props.paginator ) {
                                i++;
                                return <ImageContainer 
                                    src={image.image} 
                                    title={image.title} 
                                    author={image.author} 
                                    key={i} />
                            }
                            else
                                return null;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UploadContent