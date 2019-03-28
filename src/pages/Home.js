import React, { Component } from 'react'
import UploadedContentContainer from './../containers/UploadedContentContainer';

class Home extends Component {
    render () {
        return (
            <main>
                <UploadedContentContainer
                    title={'Latest uploads'} />
				<UploadedContentContainer
                    title={'Latest guests uploads'}
                    guests />
                <div className="mainContainer">
                    <div className="news">
                        <h2>News</h2>
                        <div className="newsInfo">
                            <p>We are showing you a list of improvements that are planned for the website.</p>
                            <p>Short term:</p>
                            <ul>
                                <li>
                                    <span className="workDone">Thumbnail previews for non-guests images</span>
                                </li>
                                <li>Design for News section</li>
                            </ul>
                            <p>Mid term:</p>
                            <ul>
                                <li>
                                    User area
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home