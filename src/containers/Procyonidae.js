import { CURRENT_PAGE } from '../constants'
import { connect } from 'react-redux';

import App from './../App';

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (page) => dispatch({
            type: CURRENT_PAGE,
            currentPage: page
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(App);

export default ComponentWithConnectionToRedux;