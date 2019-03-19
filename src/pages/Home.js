import React, { Component } from 'react'
import UploadedContentContainer from './../containers/UploadedContentContainer';

import { URL, GUEST_URL } from '../constants';

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
                    url={GUEST_URL}
                    guests />
            </main>
        )
    }
}

export default Home