import React, { Component } from 'react'
import LoadingImage from '../components/Loading';
import { DETAIL_URL, IMAGE_URL } from '../constants';

class ImageDetail extends Component {
    constructor(props) {
        super(props)
        this.props.setCurrentPage(1);
        this.state = {
            idImage: this.props.match.params.id,
            loaded: false,
            imageData: null
        }
    }
    componentDidMount() {
        fetch(`${DETAIL_URL}?id=${this.state.idImage}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                loaded: true,
                imageData: data[0]
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    showImageDetail = () => {
        return <div className="mainContainer">
            <div className="imageDetail">
                <h2>{this.state.imageData.title}, <span>by {this.state.imageData.author}</span></h2>
                <img src={`${IMAGE_URL}/${this.state.imageData.path}`} alt={this.state.imageData.title} />
            </div>
        </div>
    }
    render () {
        return (
            <main>
                {
                    !this.state.loaded
                    ? <LoadingImage />
                    : this.showImageDetail()
                }
            </main>
        )
    }
}

export default ImageDetail