import { connect } from 'react-redux';

import { CURRENT_PAGE } from '../constants';
import Pagination from '../components/Pagination';

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

const ComponentWithConnectionToRedux = createConnection(Pagination);

export default ComponentWithConnectionToRedux;