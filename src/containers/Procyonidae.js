import { NEW_CURRENT_PAGE } from '../constants'
import { connect } from 'react-redux';

import App from './../App';

const mapStateToProps = state => {
    return {
        newCurrentPage: state.newCurrentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newCurrentPage: (page) => dispatch({
            type: NEW_CURRENT_PAGE,
            newCurrentPage: page
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(App);

export default ComponentWithConnectionToRedux;