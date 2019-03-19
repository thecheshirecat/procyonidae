import { NEWEST_CURRENT_PAGE } from '../constants'
import { connect } from 'react-redux';

import App from './../App';

const mapStateToProps = state => {
    return {
        newestCurrentPage: state.newestCurrentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newCurrentPage: (page) => dispatch({
            type: NEWEST_CURRENT_PAGE,
            newestCurrentPage: page
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(App);

export default ComponentWithConnectionToRedux;