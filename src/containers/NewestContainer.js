import { connect } from 'react-redux';

import Newest from '../pages/Newest';
import { CHANGE_SECTION } from '../constants';

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
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(Newest);

export default ComponentWithConnectionToRedux;