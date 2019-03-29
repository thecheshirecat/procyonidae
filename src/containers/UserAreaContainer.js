import { connect } from 'react-redux';

import { CHANGE_SECTION, CURRENT_PAGE, LOGIN } from '../constants';
import UserArea from '../pages/UserArea';

const mapStateToProps = state => {
    return {
        section: state.section,
        currentPage: state.currentPage,
        logged: state.logged,
        idLogin: state.idLogin,
        usernameLogin: state.usernameLogin
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
        }),
        setLogin: (id, username, email) => dispatch({
            type: LOGIN,
            idLogin: id,
            usernameLogin: username,
            emailLogin: email,
            logged: true
        })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(UserArea);

export default ComponentWithConnectionToRedux;