import React, { Component } from 'react'
import UploadedContent from '../components/UploadedContent';

import { URL, GUEST_URL } from '../constants';

class Home extends Component {
    render () {
        return (
            <main>
                <UploadedContent title={'Latest uploads'} url={URL} />
				<UploadedContent title={'Latest guests uploads'} additionalClasses={"guest"} url={GUEST_URL} guests />
            </main>
        )
    }
}

export default Home