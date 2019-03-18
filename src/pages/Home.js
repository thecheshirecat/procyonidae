import React, { Component } from 'react'
import UploadContent from '../components/UploadContent';

import { URL, GUEST_URL } from '../constants/Links';

class Home extends Component {
    render () {
        return (
            <main>
                <UploadContent title={'Latest uploads'} url={URL} />
				<UploadContent title={'Latest guests uploads'} additionalClasses={"guest"} url={GUEST_URL} guests />
            </main>
        )
    }
}

export default Home