import React, { Component } from 'react'
import { SHARE_ART } from '../constants';
import Button from '../components/Button';

class ShareArt extends Component {
    constructor(props) {
        super(props)
        this.props.changeSection(SHARE_ART)
        this.props.setCurrentPage(1)
    }
    render () {
        return (
            <div className="mainContainer">
                <p>Share your image with us.</p>
                <p>Provide your name, image title, the link of the image itself and the source of it.</p>
                <p>This is a SFW (Safe For Work) website, any kind of NSFW will be dismissed.</p>
                <form>
                    <div className="inputContainer">
                        <input type="text" name="image-artist" placeholder="Your name" />
                    </div>
                    <div className="inputContainer">
                        <input type="text" name="image-title" placeholder="Image title" />
                    </div>
                    <div className="inputContainer">
                        <input type="text" name="image-url" placeholder="http://image-url.com/image.jpg" />
                    </div>
                    <div className="inputContainer">
                        <input type="text" name="image-source" placeholder="http://image-url.com" />
                    </div>
                    <div className="inputContainer">
                        <Button href='#' handleClick={this.handleClick} text={"Share image"} />
                    </div>
                </form>
            </div>
        )
    }
}

export default ShareArt