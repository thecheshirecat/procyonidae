import React, { Component } from 'react'
import UploadContent from '../components/UploadContent';

const URL = 'http://10.10.2.19:8010';
const GUEST_URL = 'http://10.10.2.19:8010/guests.php';

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