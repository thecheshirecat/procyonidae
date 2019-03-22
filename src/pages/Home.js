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
                    additionalClasses={"guest"}
                    guests />
            </main>
        )
    }
}

export default Home