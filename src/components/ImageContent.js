import React, { Component } from 'react'

class ImageContainer extends Component {
    render () {
        return (
            <div className="imageThumbnailContainer">
                <a className="thumbnail" href={this.props.link}>
                    <div className="image" style={{backgroundImage: `url(${this.props.src})`}}></div>
                </a>
                <div className="imageInfo">
                    <span className="title">
                        <a href="/">{this.props.title}</a>
                    </span>
                    <span className="author">
                        by <a href="/" className="authorName">{this.props.author}</a>
                    </span>
                </div>
            </div>
        )
    }
}

export default ImageContainer