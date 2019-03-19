import { HOME, CHANGE_SECTION, CURRENT_PAGE } from '../constants'

const INITIAL_STATE = {
    currentPage: 1,
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
        case CURRENT_PAGE:
            state = {
                ...state,
                currentPage: action.currentPage
            }
            break;
        default: 
            break;
    }
    return state;
}