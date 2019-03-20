import React, { Component } from 'react'
import UploadedContentContainer from './../containers/UploadedContentContainer';

import { URL, GUESTS_URL } from '../constants';

class Home extends Component {
    render () {
        return (
            <main>
                <UploadedContentContainer
                    title={'Latest uploads'}
                    url={URL} />
				<UploadedContentContainer
                    title={'Latest guests uploads'}
                    additionalClasses={"guest"}
                    url={GUESTS_URL}
                    guests />
            </main>
        )
    }
}

export default Home