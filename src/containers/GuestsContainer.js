import { connect } from 'react-redux';

import Guests from '../pages/Guests';
import { CHANGE_SECTION, CURRENT_PAGE } from '../constants';

const mapStateToProps = state => {
    return {
        section: state.section,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch({
            type: CHANGE_SECTION,
            section: section
        }),
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

const ComponentWithConnectionToRedux = createConnection(Guests);

export default ComponentWithConnectionToRedux;