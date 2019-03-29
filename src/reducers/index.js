import { HOME, CHANGE_SECTION, CURRENT_PAGE, LOGIN } from '../constants'

const INITIAL_STATE = {
    currentPage: 1,
    section: HOME,
    logged: false,
    idLogin: null,
    usernameLogin: null,
    emailLogin: null
}

export function procyonidaeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SECTION:
            state = {
                ...state,
                section: action.section
            }
            break;
        case CURRENT_PAGE:
            state = {
                ...state,
                currentPage: action.currentPage
            }
            break;
        case LOGIN:
            state = {
                ...state,
                idLogin: action.idLogin,
                usernameLogin: action.usernameLogin,
                emailLogin: action.emailLogin,
                logged: action.logged
            }
            break;
        default: 
            break;
    }
    return state;
}