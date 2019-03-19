import { connect } from 'react-redux';

import { NEWEST_CURRENT_PAGE } from '../constants';
import Pagination from '../components/Pagination';

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        setcurrentPage: (page) => dispatch({
            type: NEWEST_CURRENT_PAGE,
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