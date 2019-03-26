import { CURRENT_PAGE } from '../constants'
import { connect } from 'react-redux';

import ImageDetail from '../pages/ImageDetail';

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

const ComponentWithConnectionToRedux = createConnection(ImageDetail);

export default ComponentWithConnectionToRedux;