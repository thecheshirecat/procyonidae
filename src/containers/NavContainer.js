import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import { CHANGE_SECTION, CURRENT_PAGE } from '../constants';

const mapStateToProps = state => {
    return {
        section: state.section
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch({
            type: CHANGE_SECTION,
            section: section
        }),
        setCurrentPage: () => dispatch({
            type: CURRENT_PAGE,
            currentPage: 1
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(Navigation);

export default ComponentWithConnectionToRedux;