import React, { Component } from 'react'
import { SHARE_ART, SHARE_ART_URL } from '../constants';
import Button from '../components/Button';

class ShareArt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            imageArtist: '',
            imageTitle: '',
            imageUrl: '',
            imageSource: ''
        }
        this.props.changeSection(SHARE_ART)
        this.props.setCurrentPage(1)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            disabled: true
        })
        var data = `artist=${this.state.imageArtist}&title=${this.state.imageTitle}&image=${this.state.imageUrl}&source=${this.state.imageSource}`
        fetch(SHARE_ART_URL, {
            method: 'POST',headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: data
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTimeout(function() {
                if(data.recieved === "OK") {
                    console.log("image recieved")
                }
                else {
                    console.log("error recieving image", data.message)
                }
                this.setState({
                    disabled: false
                })
            }.bind(this), 1000);
        })
    }
    render () {
        return (
            <div className="mainContainer">
                <p>Share your image with us.</p>
                <p>Provide your name, image title, the link of the image itself and the source of it.</p>
                <p>This is a SFW website, any kind of NSFW will be dismissed.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="image-artist"
                            value={this.state.imageArtist}
                            onChange={e => this.setState({imageArtist: e.target.value })}
                            placeholder="Your name" />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="image-title"
                            value={this.state.imageTitle}
                            onChange={e => this.setState({imageTitle: e.target.value })}
                            placeholder="Image title" />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="image-url"
                            value={this.state.imageUrl}
                            onChange={e => this.setState({imageUrl: e.target.value })}
                            placeholder="http://image-url.com/image.jpg" />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="image-source"
                            value={this.state.imageSource}
                            onChange={e => this.setState({imageSource: e.target.value })}
                            placeholder="http://image-url.com" />
                    </div>
                    <Button handleClick={() => null} text={'Share image'} isDisabled={this.state.disabled} />
                </form>
            </div>
        )
    }
}

export default ShareArt