import React, { Component } from 'react'

class ImageContainer extends Component {
    render () {
        let thumbnail = this.props.showThumbnail ? this.props.thumbnail : this.props.src
        return (
            <div className="imageThumbnailContainer">
                <a className="thumbnail" href={this.props.link}>
                    <div className="image" style={{backgroundImage: `url(${thumbnail})`}}></div>
                </a>
                <div className="imageInfo">
                    <span className="title">
                        <a href={this.props.link}>{this.props.title}</a>
                    </span>
                    <span className="author">
                        by <span className="authorName">{this.props.author}</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default ImageContainer