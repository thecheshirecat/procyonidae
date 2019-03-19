import { connect } from 'react-redux';

import { NEWEST_CURRENT_PAGE } from '../constants';
import Pagination from '../components/Pagination';

const mapStateToProps = state => {
    return {
        newestCurrentPage: state.newestCurrentPage
    }
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        setNewestCurrentPage: (page) => dispatch({
            type: NEWEST_CURRENT_PAGE,
            newestCurrentPage: page
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(Pagination);

export default ComponentWithConnectionToRedux;