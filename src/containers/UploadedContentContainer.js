import { CURRENT_PAGE } from '../constants'
import { connect } from 'react-redux';

import UploadedContent from '../components/UploadedContent';

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newCurrentPage: (page) => dispatch({
            type: CURRENT_PAGE,
            currentPage: page
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(UploadedContent);

export default ComponentWithConnectionToRedux;