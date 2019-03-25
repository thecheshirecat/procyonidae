import React, { Component } from 'react'
import { SHARE_ART, SHARE_ART_URL } from '../constants';
import Button from '../components/Button';

import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaRef = React.createRef();
const TESTKEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
const KEY = "6Ld_4JkUAAAAAL__co5gAX6QtuEkKQDTyYQ9V-aY"

class ShareArt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true,
            imageArtist: '',
            imageTitle: '',
            imageUrl: '',
            imageSource: '',
            imageSent: null
        }
        this.props.changeSection(SHARE_ART)
        this.props.setCurrentPage(1)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            disabled: true,
            imageSent: "SENDING"
        }, () => {
            var data = `artist=${this.state.imageArtist}&title=${this.state.imageTitle}&image=${this.state.imageUrl}&source=${this.state.imageSource}`
            fetch(SHARE_ART_URL, {
                method: 'POST',headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body: data
            })
            .then(response => response.json())
            .then(data => {
                recaptchaRef.current.reset()
                this.setState({
                    disabled: true,
                    imageSent: data.recieved
                })
            })
        })
    }
    render () {
        return (
            <div className="mainContainer row">
                <div className="shareStatus">
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
                                placeholder="Artist name" />
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
                        <div className="inputContainer">
                            <ReCAPTCHA
                                sitekey={KEY}
                                onChange={() => {
                                    this.setState({disabled: false})
                                    }
                                }
                                ref={recaptchaRef} />
                        </div>
                        <Button handleClick={() => null} text={'Share image'} isDisabled={this.state.disabled} />
                    </form>
                </div>
                <div className="shareStatus">
                    {
                        this.state.imageSent === null
                            ? <div>
                                We are ready to send the image...
                            </div>
                            : this.state.imageSent === "OK"
                                ? <div>Your image was sent!</div>
                                : this.state.imageSent === "KO"
                                    ? <div>We could not send your image =(</div>
                                    : <div>We are sending the image...</div>
                    }
                </div>
            </div>
        )
    }
}

export default ShareArt