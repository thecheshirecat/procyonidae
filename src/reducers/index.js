import { HOME, CHANGE_SECTION, NEWEST_CURRENT_PAGE } from '../constants'

const INITIAL_STATE = {
    newestCurrentPage: 1,
    section: HOME
}

export function procyonidaeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SECTION:
            state = {
                ...state,
                section: action.section
            }
            break;
        case NEWEST_CURRENT_PAGE:
            state = {
                ...state,
                newestCurrentPage: action.newestCurrentPage
            }
            break;
        default: 
            break;
    }
    return state;
}